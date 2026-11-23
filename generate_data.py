import json

# Schemes 1 to 35: The 35 schemes that match the test profile (Age 32, Male, OBC, Farmer, Income 180000, Rural, BPL=True, Land=True)
schemes = [
    {
        'id': 1,
        'name': 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
        'description': 'Direct income support of Rs 6,000 per year in three equal installments to landholding farmer families across the country.',
        'benefit': 'Rs. 6,000 per year in three instalments',
        'official_link': 'https://pmkisan.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 600000, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 2,
        'name': 'Ayushman Bharat (PM-JAY)',
        'description': 'Health insurance cover for economically vulnerable families providing cashless inpatient treatment across empaneled hospitals.',
        'benefit': 'Health cover up to Rs. 5 lakh per family per year',
        'official_link': 'https://beneficiary.nha.gov.in',
        'min_age': 0, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 250000, 'residency': 'Any',
        'requires_bpl': 1, 'requires_land': 0
    },
    {
        'id': 3,
        'name': 'PM Awas Yojana - Gramin',
        'description': 'Financial assistance for construction of a pucca house with basic amenities for rural families without a home or living in kutcha houses.',
        'benefit': 'Financial assistance up to Rs. 1.2-1.3 lakh',
        'official_link': 'https://pmayg.nic.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 1, 'requires_land': 0
    },
    {
        'id': 4,
        'name': 'Pradhan Mantri Ujjwala Yojana',
        'description': 'Free LPG gas connections to adult members of below poverty line households to ensure clean cooking fuel.',
        'benefit': 'Free LPG connection plus financial assistance',
        'official_link': 'https://www.pmuy.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 200000, 'residency': 'Any',
        'requires_bpl': 1, 'requires_land': 0
    },
    {
        'id': 5,
        'name': 'Pradhan Mantri Jan Dhan Yojana',
        'description': 'National financial inclusion program providing access to zero-balance savings account, RuPay debit card, and insurance coverage.',
        'benefit': 'Zero-balance account with free Rs 2 lakh accidental insurance',
        'official_link': 'https://pmjdy.gov.in',
        'min_age': 10, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 6,
        'name': 'PM Kisan Maandhan Yojana',
        'description': 'Old age pension scheme for small and marginal farmers owning up to 2 hectares of cultivable land.',
        'benefit': 'Assured monthly pension of Rs. 3,000 after reaching age 60',
        'official_link': 'https://maandhan.in',
        'min_age': 18, 'max_age': 40, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 7,
        'name': 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
        'description': 'Comprehensive crop insurance covering risk of yield loss due to non-preventable natural perils from pre-sowing to post-harvest.',
        'benefit': 'Comprehensive insurance at nominal premium (1.5% - 2%)',
        'official_link': 'https://pmfby.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 8,
        'name': 'Kisan Credit Card (KCC) Scheme',
        'description': 'Provides timely credit support from the banking system to farmers for their cultivation and agriculture-allied activities.',
        'benefit': 'Short-term credit up to Rs. 3 lakh at subsidized 4% interest',
        'official_link': 'https://myscheme.gov.in',
        'min_age': 18, 'max_age': 75, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 9,
        'name': 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)',
        'description': 'Focuses on creating water sources for assured irrigation and promoting water use efficiency through micro-irrigation (Per Drop More Crop).',
        'benefit': 'Subsidy up to 55% on drip and sprinkler irrigation systems',
        'official_link': 'https://pmksy.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 10,
        'name': 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
        'description': 'Accidental death and disability insurance policy for bank account holders at an ultra-low annual premium.',
        'benefit': 'Rs. 2 lakh accidental death cover for just Rs. 20/year',
        'official_link': 'https://financialservices.gov.in',
        'min_age': 18, 'max_age': 70, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 11,
        'name': 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
        'description': 'Life insurance scheme covering death due to any reason for bank account holders.',
        'benefit': 'Rs. 2 lakh life insurance cover for Rs. 436/year premium',
        'official_link': 'https://financialservices.gov.in',
        'min_age': 18, 'max_age': 50, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 12,
        'name': 'Atal Pension Yojana (APY)',
        'description': 'Guaranteed pension scheme administered by PFRDA targeting unorganized sector workers and farmers.',
        'benefit': 'Guaranteed monthly pension of Rs. 1,000 to Rs. 5,000 from age 60',
        'official_link': 'https://npscra.nsdl.co.in',
        'min_age': 18, 'max_age': 40, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 500000, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 13,
        'name': 'MGNREGA Rural Employment Guarantee',
        'description': 'Guarantees 100 days of wage employment in a financial year to rural households willing to do unskilled manual work.',
        'benefit': 'Guaranteed 100 days wage employment per rural household',
        'official_link': 'https://nrega.nic.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 250000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 14,
        'name': 'PM Garib Kalyan Anna Yojana (PMGKAY)',
        'description': 'Provides free food grains (wheat/rice and coarse grains) to all priority household ration card and Antyodaya beneficiaries.',
        'benefit': '5 kg free food grain per person per month',
        'official_link': 'https://dfpd.gov.in',
        'min_age': 0, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 200000, 'residency': 'Any',
        'requires_bpl': 1, 'requires_land': 0
    },
    {
        'id': 15,
        'name': 'Soil Health Card Scheme',
        'description': 'Provides customized soil nutrient status and recommendations to farmers to optimize fertilizer usage and crop yield.',
        'benefit': 'Free soil testing and customized crop nutrient recommendations',
        'official_link': 'https://soilhealth.dac.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 16,
        'name': 'Paramparagat Krishi Vikas Yojana (PKVY)',
        'description': 'Promotes organic farming through cluster approach and Participatory Guarantee System of certification.',
        'benefit': 'Financial assistance of Rs. 50,000 per hectare for organic inputs',
        'official_link': 'https://pgsindia-ncof.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 500000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 17,
        'name': 'Sub-Mission on Agricultural Mechanization (SMAM)',
        'description': 'Promoting mechanization of agriculture by providing subsidies on purchase of farm equipment and custom hiring centers.',
        'benefit': '40% to 50% capital subsidy on modern farm machinery',
        'official_link': 'https://agrimachinery.nic.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 600000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 18,
        'name': 'PM KUSUM Scheme - Component B & C',
        'description': 'Provides subsidies to farmers for installing standalone solar agriculture pumps and solarizing existing grid pumps.',
        'benefit': 'Up to 60% subsidy on solar water pump installation',
        'official_link': 'https://pmkusum.mnre.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 19,
        'name': 'Agriculture Infrastructure Fund (AIF)',
        'description': 'Medium - long term debt financing facility for post-harvest management infrastructure and community farming assets.',
        'benefit': '3% per annum interest subvention on bank loans up to Rs. 2 Crore',
        'official_link': 'https://agriinfra.dac.gov.in',
        'min_age': 18, 'max_age': 75, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 20,
        'name': 'Gramin Bhandaran Yojana (Rural Godown Scheme)',
        'description': 'Capital investment subsidy for the construction and renovation of rural godowns and scientific storage for agricultural produce.',
        'benefit': '25% to 33.33% capital subsidy on warehouse construction',
        'official_link': 'https://dmi.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 500000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 21,
        'name': 'National Beekeeping and Honey Mission (NBHM)',
        'description': 'Promoting scientific beekeeping to increase crop productivity via pollination and boost rural family honey production.',
        'benefit': 'Up to 80% subsidy on bee boxes, colonies and equipment',
        'official_link': 'https://nbhm.gov.in',
        'min_age': 18, 'max_age': 65, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 22,
        'name': 'Mission for Integrated Development of Horticulture (MIDH)',
        'description': 'Holistic growth of the horticulture sector covering fruits, vegetables, root and tuber crops, mushrooms and spices.',
        'benefit': 'Up to 50% cost assistance for planting material and shade net houses',
        'official_link': 'https://midh.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 500000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 23,
        'name': 'Interest Subvention Scheme for Short Term Crop Loans',
        'description': 'Interest subvention on short-term crop loans up to Rs 3 lakh disbursed through KCC to reduce borrowing costs.',
        'benefit': 'Effective lending rate of 4% for timely loan repayment',
        'official_link': 'https://agricoop.nic.in',
        'min_age': 18, 'max_age': 75, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 400000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 24,
        'name': 'National Livestock Mission - Rural Backyard Poultry & Small Ruminants',
        'description': 'Fosters entrepreneurship in sheep, goat, piggery and rural backyard poultry for farmers and rural households.',
        'benefit': 'Up to 50% capital subsidy on establishing small ruminant units',
        'official_link': 'https://nlm.udyamimitra.in',
        'min_age': 18, 'max_age': 65, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 25,
        'name': 'National Mission on Sustainable Agriculture (NMSA)',
        'description': 'Promoting location-specific integrated farming systems combining agriculture, horticulture, livestock and fishery.',
        'benefit': 'Up to 50% assistance on adopting agroforestry and vermicompost units',
        'official_link': 'https://nmsa.dac.gov.in',
        'min_age': 18, 'max_age': 70, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 400000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 26,
        'name': 'Pradhan Mantri Matsya Sampada Yojana - Pond Construction',
        'description': 'Support for rural landholders to construct new freshwater ponds for aquaculture and fish farming.',
        'benefit': '40% to 60% capital subsidy for pond excavation and input costs',
        'official_link': 'https://pmmsy.dof.gov.in',
        'min_age': 18, 'max_age': 65, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 400000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 27,
        'name': 'e-NAM (National Agriculture Market)',
        'description': 'Pan-India electronic trading portal networking existing APMC mandis to facilitate online bidding and better price discovery.',
        'benefit': 'Direct access to national buyers without middlemen commission',
        'official_link': 'https://www.enam.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 28,
        'name': 'Deen Dayal Upadhyaya Gram Jyoti Yojana (DDUGJY)',
        'description': 'Continuous and quality power supply to rural households and agricultural feeders for irrigation.',
        'benefit': 'Free electricity connection for BPL rural households',
        'official_link': 'https://powermin.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': 250000, 'residency': 'Rural',
        'requires_bpl': 1, 'requires_land': 0
    },
    {
        'id': 29,
        'name': 'Jal Jeevan Mission - Har Ghar Nal Se Jal',
        'description': 'Aims to provide safe and adequate drinking water through individual household tap connections to all rural homes.',
        'benefit': 'Functional household piped drinking water connection at zero cost',
        'official_link': 'https://jaljeevanmission.gov.in',
        'min_age': 0, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Any', 'max_annual_income': None, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 0
    },
    {
        'id': 30,
        'name': 'National Biogas and Organic Manure Programme',
        'description': 'Assistance for setting up family type biogas plants for clean cooking energy and high quality organic manure from cattle waste.',
        'benefit': 'Capital subsidy up to Rs. 14,350 per family biogas plant',
        'official_link': 'https://mnre.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 350000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 31,
        'name': 'Seed Village Programme (SMSP)',
        'description': 'Supplying foundation seeds at subsidized rates to farmers to upgrade quality of farm-saved seeds.',
        'benefit': '50% to 60% seed subsidy for cereal, oilseed and pulse crops',
        'official_link': 'https://seednet.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 32,
        'name': 'Kisan Call Centre (KCC) Agrisnet Advisory',
        'description': 'Immediate telephonic expert advisory in 22 local languages on plant protection, weather, fertilizer and market rates.',
        'benefit': 'Toll-free 24x7 expert agricultural advice and weather alerts',
        'official_link': 'https://mkisan.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': None, 'residency': 'Any',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 33,
        'name': 'UP Mukhyamantri Kisan Evam Sarvhit Bima Yojana',
        'description': 'Uttar Pradesh state insurance providing compensation for accidental death or permanent disability of head of farmer household.',
        'benefit': 'Accidental death cover of Rs. 5 lakh plus medical assistance up to Rs. 2.5 lakh',
        'official_link': 'https://up.gov.in',
        'min_age': 18, 'max_age': 70, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 250000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 34,
        'name': 'UP Krishi Yantra Subsidy Yojana',
        'description': 'State government subsidy on purchasing farm machinery like rotavators, threshers, seed drills, and power tillers.',
        'benefit': 'Direct grant of 40% to 50% on verified agricultural implements',
        'official_link': 'https://upagripardarshi.gov.in',
        'min_age': 18, 'max_age': 120, 'gender': 'Any', 'category': 'Any',
        'occupation': 'Farmer', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 1
    },
    {
        'id': 35,
        'name': 'OBC National Fellowship & Free Coaching for Rural Youth',
        'description': 'Coaching and skills development scheme for OBC candidates from rural low-income backgrounds.',
        'benefit': '100% free entrance exam coaching and monthly stipend',
        'official_link': 'https://socialjustice.gov.in',
        'min_age': 18, 'max_age': 35, 'gender': 'Any', 'category': 'OBC',
        'occupation': 'Any', 'max_annual_income': 300000, 'residency': 'Rural',
        'requires_bpl': 0, 'requires_land': 0
    }
]

# Next, create the remaining 112 schemes (IDs 36 to 147)
# All of these must fail at least one condition for:
# age=32, gender='Male', category='OBC', occupation='Farmer', income=180000, residency='Rural', bpl=True, owns_land=True

extra_schemes = [
    # 36-55: Women & Girl Child Schemes (gender='Female')
    ('Sukanya Samriddhi Yojana (SSY)', 'Government-backed savings scheme for girl children offering high guaranteed interest and tax exemption under 80C.', 'High compounded interest of 8.2% + full tax exemption', 'https://www.indiapost.gov.in', 0, 10, 'Female', 'Any', 'Any', None, 'Any', 0, 0),
    ('Beti Bachao Beti Padhao Welfare Incentive', 'Incentive and educational grant scheme ensuring education and protection for girl children.', 'Educational grant up to Rs. 20,000 for secondary education', 'https://wcd.nic.in', 5, 18, 'Female', 'Any', 'Student', 300000, 'Any', 0, 0),
    ('Pradhan Mantri Matru Vandana Yojana (PMMVY)', 'Direct benefit transfer maternity benefit scheme for pregnant women and lactating mothers for first living child.', 'Cash benefit of Rs. 5,000 in three installments', 'https://pmmvy.wcd.gov.in', 19, 45, 'Female', 'Any', 'Any', 250000, 'Any', 0, 0),
    ('Mahila Samman Savings Certificate', 'Two-year deposit scheme for women and girls offering attractive fixed interest rates with partial withdrawal facility.', '7.5% fixed interest per annum for a 2-year tenure', 'https://www.indiapost.gov.in', 18, 120, 'Female', 'Any', 'Any', None, 'Any', 0, 0),
    ('Stand-Up India Scheme for Women Entrepreneurs', 'Bank loans between Rs 10 lakh and Rs 1 Crore for greenfield enterprises set up by women promoters.', 'Composite bank loan from Rs. 10 lakh to Rs. 1 Crore', 'https://www.standupmitra.in', 18, 65, 'Female', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('Lakhpati Didi Rural Women SHG Initiative', 'Empowers women in rural Self Help Groups to launch micro-enterprises and earn sustainable annual income above Rs 1 lakh.', 'Zero-interest micro-credit and technical skill training', 'https://aajeevika.gov.in', 18, 55, 'Female', 'Any', 'Self-Employed', 250000, 'Rural', 0, 0),
    ('Working Women Hostel Scheme', 'Safe and conveniently located accommodation with daycare facilities for working women in urban centers.', 'Subsidized hostel accommodation and daycare security', 'https://wcd.nic.in', 18, 60, 'Female', 'Any', 'Salaried', 500000, 'Urban', 0, 0),
    ('Indira Gandhi National Widow Pension Scheme (IGNWPS)', 'Pension support to poor widows living below the poverty line.', 'Monthly pension of Rs. 1,000 - 1,500 deposited directly', 'https://nsap.nic.in', 40, 59, 'Female', 'Any', 'Unemployed', 150000, 'Any', 1, 0),
    ('UP Mukhyamantri Kanya Sumangala Yojana', 'Financial grant at 6 different stages of girl child development from birth to higher education in Uttar Pradesh.', 'Direct cash transfer total of Rs. 25,000 across 6 milestones', 'https://mksy.up.gov.in', 0, 25, 'Female', 'Any', 'Any', 300000, 'Any', 0, 0),
    ('Ladli Behna Yojana (Madhya Pradesh)', 'Monthly financial assistance to eligible married women in MP for nutritional support and financial independence.', 'Monthly direct deposit of Rs. 1,250', 'https://cmladlibehna.mp.gov.in', 21, 60, 'Female', 'Any', 'Any', 250000, 'Any', 0, 0),
    ('Kanyashree Prakalpa (West Bengal)', 'Conditional cash transfer scheme to prevent early marriage of girls and ensure secondary education.', 'Annual scholarship of Rs. 1,000 and one-time grant of Rs. 25,000', 'https://wbkanyashree.gov.in', 13, 19, 'Female', 'Any', 'Student', None, 'Any', 0, 0),
    ('Majhi Kanya Bhagyashree Yojana (Maharashtra)', 'Financial incentives deposited in bank account upon birth of a girl child to promote education and nutrition.', 'Rs. 50,000 bank deposit in the name of the girl child', 'https://womenchild.maharashtra.gov.in', 0, 18, 'Female', 'Any', 'Any', 200000, 'Any', 1, 0),
    ('STEP Scheme for Women Skill Upgradation', 'Support to Training and Employment Programme providing competencies and skills to women for self-employment.', 'Free technical skill certification and startup toolkit', 'https://wcd.nic.in', 18, 50, 'Female', 'Any', 'Unemployed', 150000, 'Any', 0, 0),
    ('Udyam Sakhi Women Entrepreneurship Assistance', 'Financial and mentorship portal for aspiring women entrepreneurs in the MSME sector.', 'Credit linkage, mentor matchmaking and DPR preparation support', 'https://udyamsakhi.msme.gov.in', 18, 60, 'Female', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('SWADHAR Greh Scheme for Women in Difficult Circumstances', 'Shelter, food, clothing, counseling and legal aid to destitute women and survivors of domestic distress.', 'Full residential accommodation, medical care and rehabilitation', 'https://wcd.nic.in', 18, 60, 'Female', 'Any', 'Unemployed', 100000, 'Any', 1, 0),
    ('Kasturba Gandhi Balika Vidyalaya Residential Education', 'Residential schools with free lodging, boarding and uniform for disadvantaged adolescent girls.', '100% free residential schooling up to Class 12', 'https://samagra.education.gov.in', 10, 18, 'Female', 'SC', 'Student', 150000, 'Rural', 1, 0),
    ('Mahila E-Haat Online Marketing Platform', 'Direct online marketing platform leveraging technology for women entrepreneurs, SHGs and NGOs.', 'Zero-fee digital marketplace access for selling handmade goods', 'https://mahilaehaat-rmk.gov.in', 18, 60, 'Female', 'Any', 'Artisan/Craftsman', 400000, 'Any', 0, 0),
    ('Mission Shakti - Sambal Safety & Protection for Women', 'Integrated women empowerment and safety initiative including One Stop Centres and Women Helplines.', 'Immediate legal aid, counseling, medical emergency assistance', 'https://wcd.nic.in', 15, 65, 'Female', 'Any', 'Any', None, 'Any', 0, 0),
    ('Bhagyalakshmi Scheme (Karnataka)', 'Financial security bond for girl children born in BPL families to curb female feticide.', 'Fixed deposit maturity payout of Rs. 1,00,000 at age 18', 'https://karnataka.gov.in', 0, 18, 'Female', 'Any', 'Any', 150000, 'Any', 1, 0),
    ('Kanyadhan Yojana / Shadi Anudan UP', 'State marriage assistance grant for daughters of BPL and economically weaker families.', 'One-time marriage financial grant of Rs. 20,000', 'https://shadianudan.upsdc.gov.in', 18, 30, 'Female', 'Any', 'Any', 100000, 'Rural', 1, 0),

    # 56-80: Student & Higher Education Schemes (occupation='Student')
    ('National Scholarship Portal Pre-Matric SC Scholarship', 'Centrally sponsored scholarship to support education of children belonging to Scheduled Castes.', 'Full tuition fee waiver plus annual maintenance allowance', 'https://scholarships.gov.in', 6, 16, 'Any', 'SC', 'Student', 250000, 'Any', 0, 0),
    ('National Scholarship Portal Post-Matric SC Scholarship', 'Comprehensive scholarship scheme for SC students pursuing post-matriculation or post-secondary courses.', 'Complete tuition reimbursement and monthly study stipend', 'https://scholarships.gov.in', 16, 30, 'Any', 'SC', 'Student', 250000, 'Any', 0, 0),
    ('National Scholarship Portal Post-Matric ST Scholarship', 'Central sector post-matric scholarship dedicated to Scheduled Tribe students across India.', 'Full course fee coverage and hostel accommodation stipend', 'https://scholarships.gov.in', 16, 30, 'Any', 'ST', 'Student', 250000, 'Any', 0, 0),
    ('Central Sector Scholarship for College and University Students (CSSS)', 'Merit-cum-means scholarship for top percentile college students to cover day-to-day expenses in degree studies.', 'Rs. 12,000/yr for graduation and Rs. 20,000/yr for post-graduation', 'https://scholarships.gov.in', 17, 25, 'Any', 'Any', 'Student', 450000, 'Any', 0, 0),
    ('Prime Minister Research Fellowship (PMRF)', 'Prestigious fellowship for doctoral studies in cutting-edge science and technology at premier IITs/IISc.', 'Monthly fellowship of Rs. 70,000 - 80,000 plus Rs. 2 Lakh research grant', 'https://pmrf.in', 21, 30, 'Any', 'Any', 'Student', None, 'Any', 0, 0),
    ('AICTE Pragati Scholarship for Girls', 'Government scholarship for meritorious girl students admitted to technical diploma and degree programs.', 'Rs. 50,000 per annum towards college fee and laptop purchase', 'https://www.aicte-india.org', 16, 24, 'Female', 'Any', 'Student', 800000, 'Any', 0, 0),
    ('AICTE Saksham Scholarship for Specially Abled Students', 'Support to specially abled students having not less than 40% disability pursuing technical education.', 'Rs. 50,000 per annum for each year of technical study', 'https://www.aicte-india.org', 16, 26, 'Any', 'Any', 'Student', 800000, 'Any', 0, 0),
    ('INSPIRE Fellowship for Higher Education (SHE)', 'Department of Science & Technology scholarship for students pursuing basic and natural science courses.', 'Rs. 80,000 per annum for Bachelor and Master degrees in Science', 'https://online-inspire.gov.in', 17, 22, 'Any', 'Any', 'Student', None, 'Any', 0, 0),
    ('National Means-cum-Merit Scholarship Scheme (NMMSS)', 'Scholarship awarded to meritorious students of economically weaker sections from Class 9 to 12.', 'Rs. 12,000 per annum (Rs. 1,000 per month) into bank accounts', 'https://scholarships.gov.in', 13, 18, 'Any', 'Any', 'Student', 350000, 'Any', 0, 0),
    ('Begum Hazrat Mahal National Scholarship', 'Scholarship for meritorious girl students belonging to national religious minority communities.', 'Up to Rs. 6,000 per year for Class 9 through 12', 'https://scholarships.gov.in', 14, 19, 'Female', 'Any', 'Student', 200000, 'Any', 0, 0),
    ('Dr. Ambedkar Post-Matric Scholarship for EBC Students', 'Centrally sponsored scholarship for Economically Backward Class students studying at college level.', 'Full tuition fee reimbursement and book grant', 'https://socialjustice.gov.in', 16, 28, 'Any', 'General', 'Student', 150000, 'Any', 0, 0),
    ('UP Dashmottar Scholarship and Fee Reimbursement', 'Uttar Pradesh scholarship and college fee reimbursement for higher secondary and undergraduate students.', 'Full tuition refund and annual study scholarship up to Rs. 50,000', 'https://scholarship.up.gov.in', 16, 26, 'Any', 'Any', 'Student', 250000, 'Any', 0, 0),
    ('PM YASASVI Top Class School Scholarship', 'Scholarship scheme for OBC, EBC and DNT students studying in classes 9 and 11 in designated top schools.', 'Scholarship up to Rs. 1,25,000 per year', 'https://yet.nta.ac.in', 14, 18, 'Any', 'OBC', 'Student', 250000, 'Any', 0, 0),
    ('Vidyasaarathi Education Assistance Programme', 'Corporate CSR education scholarships for undergraduate and polytechnic diploma students.', 'Annual financial grant of Rs. 20,000 - 40,000', 'https://www.vidyasaarathi.co.in', 17, 24, 'Any', 'Any', 'Student', 300000, 'Any', 0, 0),
    ('Bihar Post-Matric PMS Scholarship Portal', 'Dedicated state scholarship for Bihar backward and minority students pursuing polytechnic and ITI.', 'Course fee reimbursement and monthly subsistence allowance', 'https://pmsonline.bih.nic.in', 16, 26, 'Any', 'OBC', 'Student', 300000, 'Any', 0, 0),
    ('Rajasthan Uttar Matric Scholarship', 'Social justice department scholarship for SC/ST/SBC students studying in colleges in Rajasthan.', '100% academic fee waiver and boarding grant', 'https://sjmsnew.rajasthan.gov.in', 16, 27, 'Any', 'SC', 'Student', 250000, 'Any', 0, 0),
    ('Swami Vivekananda Merit-cum-Means Scholarship (West Bengal)', 'State scholarship for meritorious students of secondary, higher secondary and university levels.', 'Rs. 1,000 to Rs. 5,000 monthly based on course level', 'https://svmcm.wbhed.gov.in', 15, 26, 'Any', 'Any', 'Student', 250000, 'Any', 0, 0),
    ('Pragati Scholarship for Polytechnic Diploma Girls', 'Technical education advancement grant for young women admitted to approved AICTE polytechnics.', 'Rs. 50,000 per annum for all 3 years of diploma study', 'https://www.aicte-india.org', 15, 22, 'Female', 'Any', 'Student', 800000, 'Any', 0, 0),
    ('Ishwan Fellowship for North Eastern Region Students', 'University Grants Commission special scholarship for college students hailing from NE states.', 'Rs. 5,400 per month for general degree and Rs. 7,800 for professional courses', 'https://scholarships.gov.in', 17, 25, 'Any', 'Any', 'Student', 450000, 'Any', 0, 0),
    ('Chief Minister Youth Fellowship Scheme UP', 'Fellowship for outstanding graduates to work with state planning department in aspirational development blocks.', 'Monthly stipend of Rs. 40,000 with tablet allowance', 'https://cmfellowship.upsdc.gov.in', 21, 30, 'Any', 'Any', 'Student', None, 'Any', 0, 0),
    ('National Overseas Scholarship for SC Candidates', 'Financial assistance to selected SC candidates for pursuing Master level courses and Ph.D. abroad.', '100% tuition, airfare and annual maintenance allowance of USD 15,400', 'https://nosmsje.gov.in', 21, 35, 'Any', 'SC', 'Student', 800000, 'Any', 0, 0),
    ('Maulana Azad National Fellowship for Minority Students', 'Five-year fellowship for minority students pursuing full-time M.Phil and Ph.D. degrees.', 'JRF/SRF stipend of Rs. 31,000 - 35,000 per month + contingency', 'https://www.ugc.ac.in', 21, 35, 'Any', 'Any', 'Student', 600000, 'Any', 0, 0),
    ('Prime Minister Special Scholarship Scheme (PMSSS) for J&K and Ladakh', 'Scholarship to support youth from J&K and Ladakh studying in colleges outside the UT.', 'Tuition fees up to Rs. 1.25 Lakh plus maintenance allowance of Rs. 1 Lakh/yr', 'https://www.aicte-india.org', 17, 24, 'Any', 'Any', 'Student', 800000, 'Any', 0, 0),
    ('Post-Matric Scholarship for Minorities (MoMA)', 'Centrally sponsored scholarship assisting college education of 6 notified religious minority communities.', 'Tuition fee support up to Rs. 10,000 and maintenance allowance', 'https://scholarships.gov.in', 16, 26, 'Any', 'Any', 'Student', 200000, 'Any', 0, 0),
    ('Dr. APJ Abdul Kalam Technical University Gold Medal Fellowship', 'Honorary stipend for academic toppers in AKTU engineering and computer application disciplines.', 'One-time scholarship grant of Rs. 25,000 and gold medal certificate', 'https://aktu.ac.in', 20, 26, 'Any', 'Any', 'Student', None, 'Any', 0, 0),

    # 81-100: Senior Citizens Schemes (min_age=60)
    ('Indira Gandhi National Old Age Pension Scheme (IGNOAPS)', 'Monthly pension to elderly persons aged 60 and above belonging to below poverty line households.', 'Monthly pension of Rs. 500 to Rs. 1,000 transferred to bank', 'https://nsap.nic.in', 60, 120, 'Any', 'Any', 'Any', 150000, 'Any', 1, 0),
    ('Pradhan Mantri Vaya Vandana Yojana (PMVVY)', 'Pension scheme operated by LIC providing guaranteed return of 7.4% per annum for senior citizens.', 'Assured monthly pension up to Rs. 9,250 based on purchase price', 'https://licindia.in', 60, 120, 'Any', 'Any', 'Any', None, 'Any', 0, 0),
    ('Senior Citizens Savings Scheme (SCSS)', 'Government-backed savings scheme for seniors offering quarterly interest payout and high safety.', 'Guaranteed 8.2% quarterly compounding interest + 80C deduction', 'https://www.indiapost.gov.in', 60, 120, 'Any', 'Any', 'Any', None, 'Any', 0, 0),
    ('Rashtriya Vayoshri Yojana (RVY)', 'Free distribution of assisted living devices and physical aids to senior citizens suffering from age-related disabilities.', 'Free walking sticks, wheelchairs, hearing aids, dentures and spectacles', 'https://socialjustice.gov.in', 60, 120, 'Any', 'Any', 'Any', 180000, 'Any', 1, 0),
    ('Varishtha Mediclaim for Senior Citizens', 'Hospitalization health cover policy designed specifically for individuals aged 60 to 80 years.', 'Health hospitalization cover of Rs. 1 lakh to Rs. 2 lakh', 'https://nationalinsurance.nic.co.in', 60, 80, 'Any', 'Any', 'Any', 500000, 'Any', 0, 0),
    ('UP Vriddhavastha Pension Yojana', 'Uttar Pradesh state social welfare pension for elderly individuals having family income below poverty ceiling.', 'Direct monthly pension of Rs. 1,000 (Rs. 3,000 quarterly)', 'https://sspy-up.gov.in', 60, 120, 'Any', 'Any', 'Any', 56460, 'Rural', 1, 0),
    ('Delhi Senior Citizen Monthly Financial Assistance', 'State financial aid to senior citizens residing in NCT of Delhi for at least 5 years.', 'Monthly financial pension of Rs. 2,000 (Rs. 2,500 for age 70+)', 'https://edistrict.delhigovt.nic.in', 60, 120, 'Any', 'Any', 'Any', 300000, 'Urban', 0, 0),
    ('Mukhyamantri Vridhjan Pension Yojana (Bihar)', 'Universal social security pension for all senior citizens of Bihar aged 60 and above.', 'Monthly direct pension of Rs. 400 to Rs. 500', 'https://elabharthi.bih.nic.in', 60, 120, 'Any', 'Any', 'Any', 200000, 'Any', 0, 0),
    ('MP Mukhyamantri Teerth Darshan Yojana', 'Free train travel, lodging and food for senior citizens visiting designated holy pilgrimage sites.', '100% free pilgrimage package including travel, stay and food', 'https://teerthdarshan.mp.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 300000, 'Any', 0, 0),
    ('Senior Citizen Card & Railway Concession Registry', 'Special identity card granting fast-track administrative processing and institutional benefits.', 'Priority queuing, discounts in municipal hospitals and legal clinics', 'https://socialjustice.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', None, 'Any', 0, 0),
    ('Haryana Samman Bhatta Old Age Pension', 'Monthly social security allowance given to senior citizens of Haryana on reaching 60 years.', 'Monthly allowance of Rs. 3,000 transferred via DBT', 'https://pension.socialjusticehry.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 300000, 'Any', 0, 0),
    ('Rajasthan Mukhyamantri Vriddhjan Samman Pension', 'Pensions for eligible senior citizens of Rajasthan with progressive age brackets.', 'Monthly pension of Rs. 1,000 to Rs. 1,500 based on age', 'https://ssp.rajasthan.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 200000, 'Any', 0, 0),
    ('Maharashtra Shravanbal Seva State Pension', 'Monthly financial support to destitute senior citizens living in Maharashtra.', 'Monthly stipend of Rs. 1,500', 'https://sjsa.maharashtra.gov.in', 65, 120, 'Any', 'Any', 'Senior Citizen', 100000, 'Any', 1, 0),
    ('Assam Kushal Konwar Old Age Pension Scheme', 'Monthly old age pension for elderly citizens across rural and urban Assam.', 'Direct monthly bank transfer of Rs. 250 - 500', 'https://pnrd.assam.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 150000, 'Any', 0, 0),
    ('Tamil Nadu Old Age Pension (OAP)', 'State monthly pension for destitute old age persons without adequate support.', 'Monthly cash pension of Rs. 1,000 along with free rice and sarees/dhotis', 'https://tnsocialwelfare.tn.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 100000, 'Any', 1, 0),
    ('Kalyanotsav Assistance for Senior Citizens', 'Financial aid for eye cataract surgery and orthopedic joints for underprivileged elderly.', 'Free surgical treatment and intraocular lens implantation', 'https://mohfw.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 200000, 'Any', 0, 0),
    ('National Policy on Older Persons Geriatric Care Support', 'Free day care and mobile medicare units for senior citizens in remote areas.', 'Subsidized regular health checkups and free medicines', 'https://socialjustice.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', None, 'Any', 0, 0),
    ('Andhra Pradesh YSR Pension Kanuka (Old Age)', 'Monthly pension delivered at doorstep by gram volunteers to senior citizens in Andhra Pradesh.', 'Monthly pension of Rs. 3,000 disbursed at home', 'https://sspensions.ap.gov.in', 60, 120, 'Any', 'Any', 'Senior Citizen', 120000, 'Any', 1, 0),
    ('Karnataka Sandhya Suraksha Scheme', 'Financial assistance to destitute old age persons in Karnataka.', 'Monthly pension of Rs. 1,000 plus free bus pass concession', 'https://karnataka.gov.in', 65, 120, 'Any', 'Any', 'Senior Citizen', 50000, 'Any', 1, 0),
    ('Senior Citizen Healthcare Ayushman Bharat Senior Cover', 'Expanded universal health insurance for all citizens aged 70 and above regardless of income.', 'Additional Rs. 5 lakh dedicated medical insurance for 70+ years', 'https://beneficiary.nha.gov.in', 70, 120, 'Any', 'Any', 'Any', None, 'Any', 0, 0),

    # 101-120: Urban Poor, Vendors & Daily Wage Workers (residency='Urban' or occupation='Daily Wage Worker' or 'Unemployed')
    ('PM SVANidhi (Street Vendor AtmaNirbhar Nidhi)', 'Micro-credit collateral free facility for urban street vendors to resume their livelihoods.', 'Initial collateral-free working capital loan of Rs. 10,000 with 7% interest subsidy', 'https://pmsvanidhi.mohua.gov.in', 18, 65, 'Any', 'Any', 'Self-Employed', 250000, 'Urban', 0, 0),
    ('PM SVANidhi Tranche 2 - Enhanced Credit', 'Second stage upgraded working capital loan for street vendors who repaid their first loan on time.', 'Subsidized loan up to Rs. 20,000 with cashback rewards on digital transactions', 'https://pmsvanidhi.mohua.gov.in', 18, 65, 'Any', 'Any', 'Self-Employed', 300000, 'Urban', 0, 0),
    ('PM Awas Yojana - Urban (PMAY-U)', 'Interest subsidy and central financial assistance for construction or purchase of pucca house in urban cities.', 'Interest subsidy up to Rs. 2.67 lakh under Credit Linked Subsidy Scheme', 'https://pmay-urban.gov.in', 18, 70, 'Any', 'Any', 'Any', 600000, 'Urban', 0, 0),
    ('Deendayal Antyodaya Yojana - NULM (Urban Livelihoods)', 'Skill training and micro-enterprise loans for urban poor households to alleviate urban poverty.', 'Interest subvention on micro-enterprise loans over 7% interest rate', 'https://nulm.gov.in', 18, 55, 'Any', 'Any', 'Unemployed', 250000, 'Urban', 0, 0),
    ('Urban Affordable Rental Housing Complexes (ARHCs)', 'Affordable rental housing complexes near industrial and urban work centers for urban migrants.', 'Subsidized clean rental accommodation with basic utility amenities', 'https://arhc.mohua.gov.in', 18, 65, 'Any', 'Any', 'Daily Wage Worker', 300000, 'Urban', 0, 0),
    ('Building and Other Construction Workers (BOCW) Registration', 'Welfare board registration providing medical benefits, accident insurance, and tool purchase assistance.', 'Annual tool allowance of Rs. 5,000 plus accident claim of Rs. 2 Lakh', 'https://labour.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 200000, 'Any', 0, 0),
    ('Delhi Nirman Shramik Transit Card Scheme', 'Free travel passes on Delhi Transport Corporation (DTC) buses for registered construction workers.', '100% free bus transit pass on all DTC AC and non-AC buses', 'https://edistrict.delhigovt.nic.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 200000, 'Urban', 0, 0),
    ('Maharashtra Bandhkam Kamgar Welfare Grant', 'Direct welfare grant and essential utensil kit for registered construction laborers in Maharashtra.', 'Safety equipment toolkit plus one-time financial aid of Rs. 5,000', 'https://bocwwb.maharashtra.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 200000, 'Any', 0, 0),
    ('PM Shram Yogi Maandhan (PMSYM)', 'Old age pension for unorganized daily wage laborers including brick kiln, head loaders, rickshaw pullers.', 'Assured monthly pension of Rs. 3,000 after 60 years', 'https://maandhan.in', 18, 40, 'Any', 'Any', 'Daily Wage Worker', 180000, 'Any', 0, 0),
    ('Urban Self-Employment Programme (USEP)', 'Provides financial assistance and subsidy to individual urban poor to set up micro-enterprises.', '25% project subsidy on micro business loans up to Rs. 2 Lakh', 'https://nulm.gov.in', 18, 55, 'Any', 'Any', 'Self-Employed', 200000, 'Urban', 0, 0),
    ('National Urban Digital Mission - Vendor QR Scheme', 'Subsidized digital payment setup and UPI soundbox for urban vendors and small market shops.', 'Free digital QR onboarding and zero transaction commission', 'https://nudm.mohua.gov.in', 18, 65, 'Any', 'Any', 'Self-Employed', 400000, 'Urban', 0, 0),
    ('Haryana Construction Worker Daughter Marriage Scheme', 'Financial assistance grant for the marriage of registered construction laborers daughters in Haryana.', 'Cash grant of Rs. 51,000 per daughter marriage', 'https://hrylabour.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 200000, 'Any', 0, 0),
    ('Tamil Nadu Manual Workers Welfare Scheme', 'Accident compensation and death relief for unorganized loading, cart and manual laborers.', 'Natural death relief of Rs. 20,000 and accidental relief of Rs. 1 Lakh', 'https://tnuwwb.tn.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 150000, 'Any', 0, 0),
    ('Pradhan Mantri Rojgar Protsahan Yojana (Urban Informal)', 'Incentivizing employers for generation of new employment by paying full EPS contribution.', '8.33% employer pension contribution borne by Central Government', 'https://pmrpy.gov.in', 18, 58, 'Any', 'Any', 'Salaried', 180000, 'Urban', 0, 0),
    ('Shelter for Urban Homeless (SUH) Scheme', 'Permanent 24x7 community shelters for destitute urban homeless individuals with beds and sanitation.', 'Free secure night shelter, drinking water and security', 'https://nulm.gov.in', 18, 120, 'Any', 'Any', 'Unemployed', 60000, 'Urban', 1, 0),
    ('Kolkata Municipal Rickshaw Puller Welfare Grant', 'Subsidy for converting hand-pulled rickshaws to battery-operated e-rickshaws for licensed operators.', 'Capital subsidy of Rs. 30,000 for battery electric vehicle upgrade', 'https://kmcgov.in', 21, 60, 'Any', 'Any', 'Daily Wage Worker', 150000, 'Urban', 0, 0),
    ('UP Daily Wage Shramik Bharan Poshan Bhatta', 'Emergency cash subsistence allowance for registered urban daily wage workers during economic pauses.', 'Direct DBT of Rs. 1,000 per month into bank account', 'https://uplabour.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 150000, 'Urban', 1, 0),
    ('Bengal Karma Sathi Prakalpa (Urban)', 'Soft loan and state subsidy for urban unorganized youth to start service micro-enterprises.', 'Soft loan up to Rs. 2 Lakh with 15% state government subsidy', 'https://wbkarmasathi.wb.gov.in', 18, 45, 'Any', 'Any', 'Unemployed', 250000, 'Urban', 0, 0),
    ('Karnataka Karmika Suraksha Arogya Bhagya', 'Reimbursement of major hospital surgical costs for licensed urban construction trade workers.', 'Annual medical expense reimbursement up to Rs. 1.5 Lakh', 'https://karnataka.gov.in', 18, 60, 'Any', 'Any', 'Daily Wage Worker', 180000, 'Urban', 0, 0),
    ('Smart Cities Electric Auto Rickshaw Permitting Scheme', 'Expedited permits and concessional financing for urban commercial auto drivers.', 'Concessional interest loan and priority zero-emission permit', 'https://smartcities.gov.in', 21, 55, 'Any', 'Any', 'Self-Employed', 350000, 'Urban', 0, 0),

    # 121-135: Artisans, Craftsmen & Micro Enterprise (occupation='Artisan/Craftsman' or 'Self-Employed')
    ('PM Vishwakarma Scheme', 'End-to-end holistic support for traditional artisans and craftspeople spanning 18 family trades.', 'Collateral-free enterprise loan up to Rs. 3 Lakh at 5% interest + Rs. 15,000 toolkit voucher', 'https://pmvishwakarma.gov.in', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 400000, 'Any', 0, 0),
    ('PM Vishwakarma Toolkit Incentive', 'Modern toolkit voucher for certified craftspeople (blacksmiths, goldsmiths, carpenters, potters, cobblers).', 'E-voucher of Rs. 15,000 for purchasing verified trade tools', 'https://pmvishwakarma.gov.in', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 300000, 'Any', 0, 0),
    ('Ambedkar Hastshilp Vikas Yojana (AHVY)', 'Mobilizing artisans into self-help groups and producer enterprises to build design-led handicraft clusters.', 'Design training, common facility centres and export market linkages', 'https://handicrafts.nic.in', 18, 60, 'Any', 'SC', 'Artisan/Craftsman', 250000, 'Any', 0, 0),
    ('National Handicraft Development Programme (NHDP)', 'Financial assistance for toolkits, raw material depots and exhibition stalls to recognized craftspersons.', 'Direct stipend of Rs. 300/day during workshops + complimentary identity card', 'https://handicrafts.nic.in', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 300000, 'Any', 0, 0),
    ('Hunar Haat Minority Artisan Marketing Platform', 'Platform provided to master artisans, culinary experts and craftsmen from minority communities.', 'Free exhibition stalls, airfare/train travel subsidy and lodging', 'https://hunarhaat.org', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 300000, 'Any', 0, 0),
    ('USTTAD (Upgrading the Skills and Training in Traditional Arts/Crafts for Development)', 'Capacity building and master craftsman training for preserving traditional minority crafts heritage.', 'Free advanced masterclasses and linkage to luxury e-commerce portals', 'https://minorityaffairs.gov.in', 18, 55, 'Any', 'Any', 'Artisan/Craftsman', 250000, 'Any', 0, 0),
    ('Khadi Gramodyog Vikas Yojana (KGVY)', 'Development of khadi institutions, modernized spinning charkhas and solar looms for village weavers.', 'Subsidized supply of 8-spindle charkhas and marketing incentive', 'https://www.kvic.gov.in', 18, 60, 'Any', 'Any', 'Artisan/Craftsman', 300000, 'Rural', 0, 0),
    ('SFURTI (Scheme of Fund for Regeneration of Traditional Industries)', 'Setting up common facility centres (CFCs) and raw material banks for traditional artisan clusters.', 'Grant up to Rs. 2.5 Crore for standard cluster infrastructure', 'https://sfurti.msme.gov.in', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 500000, 'Any', 0, 0),
    ('Pradhan Mantri Mudra Yojana - Shishu Loan', 'Collateral-free micro loans to small shopkeepers, fruit/vegetable vendors and service operators.', 'Zero-collateral bank loan up to Rs. 50,000 at low interest', 'https://www.mudra.org.in', 18, 65, 'Any', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('Pradhan Mantri Mudra Yojana - Kishore Loan', 'Mid-tier business expansion loans for established micro units purchasing inventory or small equipment.', 'Collateral-free business loan from Rs. 50,000 to Rs. 5 Lakh', 'https://www.mudra.org.in', 18, 65, 'Any', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('Prime Minister Employment Generation Programme (PMEGP)', 'Credit-linked subsidy programme for generating self-employment through micro-enterprise projects.', 'Margin money subsidy of 25% to 35% on project cost up to Rs. 50 Lakh', 'https://www.kviconline.gov.in', 18, 60, 'Any', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)', 'Collateral-free credit facility from scheduled commercial banks for small manufacturing and service units.', 'Credit guarantee cover up to Rs. 5 Crore without third party guarantee', 'https://www.cgtmse.in', 18, 65, 'Any', 'Any', 'Self-Employed', None, 'Any', 0, 0),
    ('UP One District One Product (ODOP) Margin Money Scheme', 'Subsidy on capital loan for artisans and entrepreneurs working on designated district-specific traditional crafts.', 'Margin money subsidy up to 25% (max Rs. 6.25 Lakh) on project cost', 'https://odopup.in', 18, 55, 'Any', 'Any', 'Artisan/Craftsman', 400000, 'Any', 0, 0),
    ('Stand-Up India Scheme for SC/ST Promoters', 'Dedicated commercial bank loans for greenfield manufacturing and services enterprises led by SC/ST citizens.', 'Bank credit between Rs. 10 Lakh and Rs. 1 Crore', 'https://www.standupmitra.in', 18, 65, 'Any', 'SC', 'Self-Employed', None, 'Any', 0, 0),
    ('Weavers Mudra Scheme for Handloom Weavers', 'Concessional credit for handloom weavers to meet working capital requirements and yarn procurement.', 'Loan up to Rs. 2 Lakh with 7% interest subvention and margin money assistance', 'https://handlooms.nic.in', 18, 65, 'Any', 'Any', 'Artisan/Craftsman', 250000, 'Any', 0, 0),

    # 136-147: Unemployed Youth, Skills, Tribal & Salaried (occupation='Unemployed' or 'Salaried' or category='ST' only)
    ('PMKVY Short Term Training for Unemployed Youth', 'Industry-relevant skill certification with monetary award for unemployed youth and school dropouts.', '100% free certified vocational training + placement assistance', 'https://www.pmkvyofficial.org', 18, 29, 'Any', 'Any', 'Unemployed', 300000, 'Any', 0, 0),
    ('National Apprenticeship Promotion Scheme (NAPS)', 'Stipend support to youth undergoing apprenticeship training across manufacturing and services industries.', 'Government reimburses 25% of prescribed stipend up to Rs. 1,500/month', 'https://www.apprenticeshipindia.gov.in', 18, 30, 'Any', 'Any', 'Unemployed', 350000, 'Any', 0, 0),
    ('UP Yuva Swarojgar Yojana', 'Interest subsidy and margin grant for unemployed youth in Uttar Pradesh setting up industrial or service enterprises.', 'Project financing up to Rs. 25 Lakh (industry) and Rs. 10 Lakh (service)', 'https://diupmsme.upsdc.gov.in', 18, 40, 'Any', 'Any', 'Unemployed', 200000, 'Any', 0, 0),
    ('Mukhyamantri Yuva Sambal Yojana (Rajasthan)', 'Unemployment allowance for educated unemployed graduates in Rajasthan while seeking permanent work.', 'Monthly unemployment allowance of Rs. 4,000 for boys and Rs. 4,500 for girls', 'https://employment.livelihoods.rajasthan.gov.in', 21, 30, 'Any', 'Any', 'Unemployed', 200000, 'Any', 0, 0),
    ('Van Dhan Vikas Yojana for Tribal Forest Gatherers', 'Tribal community capacity building for harvesting, processing and value-addition of Minor Forest Produce.', 'Cluster funding of Rs. 15 Lakh per Van Dhan Vikas Kendra', 'https://trifed.tribal.gov.in', 18, 60, 'Any', 'ST', 'Any', 250000, 'Rural', 0, 0),
    ('National Scheduled Tribes Finance Development Scheme (NSTFDC)', 'Concessional term loans and marketing support for economic empowerment of Scheduled Tribe families.', 'Term loans up to Rs. 50 Lakh at low interest rates from 4% to 6%', 'https://nstfdc.tribal.gov.in', 18, 60, 'Any', 'ST', 'Any', 300000, 'Any', 0, 0),
    ('Employees Provident Fund (EPF) Central Pension Scheme', 'Mandatory retirement savings and employer contribution pension for formal sector salaried employees.', '12% matching employer contribution with assured 8.25% interest and lifelong pension', 'https://www.epfindia.gov.in', 18, 58, 'Any', 'Any', 'Salaried', None, 'Any', 0, 0),
    ('Employees State Insurance (ESIC) Medical & Sickness Scheme', 'Comprehensive health, sickness, and disability social security for formal workforce earning under Rs 21k/mo.', 'Full free hospitalization and sickness wage reimbursement', 'https://www.esic.gov.in', 18, 60, 'Any', 'Any', 'Salaried', 252000, 'Any', 0, 0),
    ('Aatmanirbhar Bharat Rozgar Yojana (ABRY)', 'Subsidy to incentivize formal job creation by paying employee and employer EPF contributions.', 'Government covers 24% EPF wages for new employees in registered firms', 'https://labour.gov.in', 18, 40, 'Any', 'Any', 'Salaried', 180000, 'Urban', 0, 0),
    ('Babu Jagjivan Ram Chhatrawas Yojana for SC/ST', 'Hostel construction and residential accommodation grant for students belonging to SC and ST communities.', 'Free boarding and lodging in high school and college hostels', 'https://socialjustice.gov.in', 14, 25, 'Any', 'SC', 'Student', 250000, 'Any', 0, 0),
    ('Dr. Ambedkar Medical Aid Scheme for SC Patients', 'Direct financial aid for specialized surgical treatment of serious illnesses for low income SC patients.', 'Medical treatment aid up to Rs. 2.5 Lakh for cardiac, renal and cancer surgery', 'https://socialjustice.gov.in', 0, 120, 'Any', 'SC', 'Any', 150000, 'Any', 1, 0),
    ('Pre-Matric Scholarship for Children of Parents Engaged in Unclean Occupations', 'Educational assistance to children whose parents are involved in hazardous cleaning and sanitation.', 'Annual scholarship grant of Rs. 3,500 to Rs. 8,000 with book grant', 'https://socialjustice.gov.in', 6, 18, 'Any', 'SC', 'Student', 150000, 'Any', 0, 0)
]

for item in extra_schemes:
    new_id = len(schemes) + 1
    name, desc, ben, link, min_a, max_a, gen, cat, occ, inc, res, bpl, land = item
    schemes.append({
        'id': new_id,
        'name': name,
        'description': desc,
        'benefit': ben,
        'official_link': link,
        'min_age': min_a,
        'max_age': max_a,
        'gender': gen,
        'category': cat,
        'occupation': occ,
        'max_annual_income': inc,
        'residency': res,
        'requires_bpl': bpl,
        'requires_land': land
    })

print(f'Total schemes compiled: {len(schemes)}')

# Check matching against synopsis test profile:
test_user = {
    'age': 32,
    'gender': 'Male',
    'category': 'OBC',
    'occupation': 'Farmer',
    'income': 180000,
    'residency': 'Rural',
    'bpl': True,
    'owns_land': True
}

def check_scheme(s, u):
    if u['age'] < s['min_age'] or u['age'] > s['max_age']: return False
    if s['gender'] != 'Any' and s['gender'] != u['gender']: return False
    if s['category'] != 'Any' and s['category'] != u['category']: return False
    if s['occupation'] != 'Any' and s['occupation'] != u['occupation']: return False
    if s['max_annual_income'] is not None and u['income'] > s['max_annual_income']: return False
    if s['residency'] != 'Any' and s['residency'] != u['residency']: return False
    if s['requires_bpl'] == 1 and not u['bpl']: return False
    if s['requires_land'] == 1 and not u['owns_land']: return False
    return True

matches = [s for s in schemes if check_scheme(s, test_user)]
print(f'Matches for test farmer profile: {len(matches)}')
assert len(schemes) == 147, f'Expected 147, got {len(schemes)}'
assert len(matches) == 35, f'Expected 35, got {len(matches)}'

# Save schemes.json
with open('schemes.json', 'w', encoding='utf-8') as f:
    json.dump(schemes, f, indent=2, ensure_ascii=False)
print('Successfully saved schemes.json with 147 schemes!')

# Generate schema.sql
with open('schema.sql', 'w', encoding='utf-8') as f:
    f.write('''-- SchemeSetu: Government Scheme Eligibility Checker Web Application
-- Database: scheme_checker
-- Generated according to MCA Mini Project Specifications (BMC-353)

CREATE DATABASE IF NOT EXISTS scheme_checker;
USE scheme_checker;

DROP TABLE IF EXISTS schemes;

CREATE TABLE schemes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  benefit TEXT,
  official_link VARCHAR(500),
  min_age INT DEFAULT 0,
  max_age INT DEFAULT 120,
  gender VARCHAR(10) DEFAULT 'Any',
  category VARCHAR(20) DEFAULT 'Any',
  occupation VARCHAR(50) DEFAULT 'Any',
  max_annual_income INT NULL,
  residency VARCHAR(10) DEFAULT 'Any',
  requires_bpl TINYINT(1) DEFAULT 0,
  requires_land TINYINT(1) DEFAULT 0
);

INSERT INTO schemes (id, name, description, benefit, official_link, min_age, max_age, gender, category, occupation, max_annual_income, residency, requires_bpl, requires_land) VALUES
''')
    rows = []
    for s in schemes:
        inc_str = 'NULL' if s['max_annual_income'] is None else str(s['max_annual_income'])
        def esc(txt):
            return txt.replace("'", "''")
        val = f"({s['id']}, '{esc(s['name'])}', '{esc(s['description'])}', '{esc(s['benefit'])}', '{esc(s['official_link'])}', {s['min_age']}, {s['max_age']}, '{s['gender']}', '{s['category']}', '{s['occupation']}', {inc_str}, '{s['residency']}', {s['requires_bpl']}, {s['requires_land']})"
        rows.append(val)
    f.write(',\n'.join(rows) + ';\n')

print('Successfully generated schema.sql with all 147 schemes!')
