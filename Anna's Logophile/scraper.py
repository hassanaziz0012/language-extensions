from bs4 import BeautifulSoup
import requests
from pprint import pprint
import json
from pprint import pprint
import itertools

# response = requests.get("https://en.m.wiktionary.org/wiki/Appendix:Mandarin_Frequency_lists/1-1000")

# soup = BeautifulSoup(response.text, "html.parser")
# html = soup.prettify()


# audios = list(soup.select('audio.kskin source'))
# srcs = []

# for i, audio in enumerate(audios):
#     src = audio.get('src')
#     if not src.endswith('.mp3'):
#         audios.pop(i)
#     srcs.append(src)
    
# with open('audios.json', 'w') as file:
#     json.dump(srcs, file)


# table = list(soup.select('table.wikitable tbody tr'))
# pprint(table)
    

# with open('scraped.json', 'w') as file:
#     for i, row in enumerate(table):
#         row = list(row)
#         for i in row:
#             try:
#                 row.remove('\n')
#             except ValueError:
#                 break

#         traditional = row[0]
#         simplified = row[1]
#         pinyin = row[2]

#         try:
#             meaning = row[3]
#             meaning = meaning.text
#             meaning = meaning.replace(pinyin.text, '')
#             meaning = meaning.replace('(file)', '')

#         except IndexError:
#             meaning = "No meaning found"

#         word = {
#             'traditional': traditional.text,
#             'simplified': simplified.text,
#             'pinyin': pinyin.text,
#             'meaning': meaning
#         }

#         json.dump(word, file)

# with open('scraped.json', 'r') as file:
#     data = list(json.load(file))
#     for i, row in enumerate(data):
#         if row['meaning'] == "No meaning found":
#             data.pop(i)

# with open('new_scraped.json', 'w') as file:
#     json.dump(data, file)

with open("new_scraped.json", "r") as file:
    data = json.load(file)

with open("audios.json", "r") as file:
    audios = list(json.load(file))

audio_index = itertools.count(start=0)

for row in data:
    if row['audio'] == "audio":
        i = next(audio_index)
        row['audio'] = audios[i]

        # Update changes because fuckups are likely to happen.
        with open("new_scraped.json", "w") as file:
            json.dump(data, file)

    elif row['audio'] == 'none':
        pass



# with open("new_scraped.json", "w") as file:
#     json.dump(data, file)