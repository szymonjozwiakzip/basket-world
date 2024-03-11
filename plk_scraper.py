import requests
from bs4 import BeautifulSoup
import json

def scrap_plk_data(url):
    # Wykonanie zapytania HTTP
    response = requests.get(url)
    plk_data = []

    # Sprawdzenie czy zapytanie zakończyło się sukcesem
    if response.status_code == 200:
        # Parsowanie zawartości strony przy użyciu BeautifulSoup
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Znalezienie tabeli na stronie
        table = soup.find('table')

        if table:
            # Wyodrębnienie wierszy z tabeli
            rows = table.find_all('tr')
            
            # Iteracja po wierszach i wyodrębnienie danych
            for row in rows:
                # Wyodrębnienie komórek wiersza
                cells = row.find_all('td')
                
                # Jeżeli są komórki, dodaj ich zawartość do listy danych
                if cells:
                    data = [cell.text.strip() for cell in cells]
                    plk_data.append(data)
        else:
            print("Nie znaleziono tabeli na stronie.")
    else:
        print("Błąd podczas pobierania strony:", response.status_code)
    
    # Zapisz dane do pliku JSON
    with open('plk_data.json', 'w') as json_file:
        json.dump(plk_data, json_file)

    return plk_data

if __name__ == "__main__":
    url = "https://plk.pl/tabele.html"
    scrap_plk_data(url)
