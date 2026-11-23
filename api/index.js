// api/index.js - Vercel Serverless Function for SchemeSetu API
// Provides native serverless execution of api.php on Vercel

const schemes = require('../schemes.json');

function checkScheme(scheme, user) {
  if (user.age < scheme.min_age || user.age > scheme.max_age) return false;
  if (scheme.gender !== 'Any' && scheme.gender.toLowerCase() !== user.gender.toLowerCase()) return false;
  if (scheme.category !== 'Any' && scheme.category.toLowerCase() !== user.category.toLowerCase()) return false;
  if (scheme.occupation !== 'Any' && scheme.occupation.toLowerCase() !== user.occupation.toLowerCase()) return false;
  if (scheme.max_annual_income !== null && scheme.max_annual_income !== undefined && scheme.max_annual_income !== '') {
    if (user.income > parseInt(scheme.max_annual_income, 10)) return false;
  }
  if (scheme.residency !== 'Any' && scheme.residency.toLowerCase() !== user.residency.toLowerCase()) return false;
  if (parseInt(scheme.requires_bpl, 10) === 1 && !user.bpl) return false;
  if (parseInt(scheme.requires_land, 10) === 1 && !user.owns_land) return false;
  return true;
}

module.exports = (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const user = {
    age: parseInt(body.age, 10) || 0,
    gender: String(body.gender || ''),
    category: String(body.category || ''),
    occupation: String(body.occupation || ''),
    income: parseInt(body.income, 10) || 0,
    residency: String(body.residency || ''),
    bpl: Boolean(body.bpl),
    owns_land: Boolean(body.owns_land),
  };

  const eligible = [];
  for (const scheme of schemes) {
    if (checkScheme(scheme, user)) {
      eligible.push({
        id: scheme.id,
        name: scheme.name,
        description: scheme.description,
        benefit: scheme.benefit,
        official_link: scheme.official_link,
      });
    }
  }

  return res.status(200).json({
    total_schemes_checked: schemes.length,
    eligible_count: eligible.length,
    eligible: eligible,
  });
};
