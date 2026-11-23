"""
serve.py - Local development server for SchemeSetu
Provides instant zero-configuration local server with full API handling.
Works on any machine with Python 3 installed.
"""

import http.server
import socketserver
import json
import os
import urllib.parse

PORT = int(os.environ.get('PORT', 8000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(DIRECTORY, 'schemes.json'), 'r', encoding='utf-8') as f:
    SCHEMES = json.load(f)

def check_scheme(scheme, user):
    # 1. Age
    if user['age'] < int(scheme['min_age']) or user['age'] > int(scheme['max_age']):
        return False
    # 2. Gender
    if scheme['gender'] != 'Any' and scheme['gender'].lower() != user['gender'].lower():
        return False
    # 3. Category
    if scheme['category'] != 'Any' and scheme['category'].lower() != user['category'].lower():
        return False
    # 4. Occupation
    if scheme['occupation'] != 'Any' and scheme['occupation'].lower() != user['occupation'].lower():
        return False
    # 5. Income
    if scheme['max_annual_income'] is not None and scheme['max_annual_income'] != '':
        if user['income'] > int(scheme['max_annual_income']):
            return False
    # 6. Residency
    if scheme['residency'] != 'Any' and scheme['residency'].lower() != user['residency'].lower():
        return False
    # 7. BPL
    if int(scheme['requires_bpl']) == 1 and not user['bpl']:
        return False
    # 8. Land
    if int(scheme['requires_land']) == 1 and not user['owns_land']:
        return False
    return True

class SchemeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        if parsed_url.path in ['/api.php', 'api.php']:
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length)
            
            try:
                user_data = json.loads(post_body.decode('utf-8'))
            except Exception:
                user_data = {}

            user = {
                'age': int(user_data.get('age', 0)),
                'gender': str(user_data.get('gender', '')),
                'category': str(user_data.get('category', '')),
                'occupation': str(user_data.get('occupation', '')),
                'income': int(user_data.get('income', 0)),
                'residency': str(user_data.get('residency', '')),
                'bpl': bool(user_data.get('bpl', False)),
                'owns_land': bool(user_data.get('owns_land', False)),
            }

            eligible = []
            for scheme in SCHEMES:
                if check_scheme(scheme, user):
                    eligible.append({
                        'id': int(scheme['id']),
                        'name': scheme['name'],
                        'description': scheme['description'],
                        'benefit': scheme['benefit'],
                        'official_link': scheme['official_link'],
                    })

            response_payload = {
                'total_schemes_checked': len(SCHEMES),
                'eligible_count': len(eligible),
                'eligible': eligible,
            }

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(response_payload, indent=2).encode('utf-8'))
            return

        super().do_POST()

    def do_GET(self):
        # Default index redirection
        if self.path in ['/', '/index.php']:
            self.path = '/index.html'
        super().do_GET()

if __name__ == '__main__':
    print('================================================================')
    print('  SchemeSetu - Government Scheme Eligibility Checker Server')
    print('  MCA Mini Project (BMC-353) - AKTU')
    print('================================================================')
    print(f'-> Server running at: http://localhost:{PORT}')
    print('-> Press Ctrl+C to stop.')
    with socketserver.TCPServer(('', PORT), SchemeRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nServer stopped.')
