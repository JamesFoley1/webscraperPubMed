import requests
import json
from bs4 import BeautifulSoup

result = requests.get("http://www.ncbi.nlm.nih.gov/pubmed/?term=%s" % "Belden JL[Author]")

src = result.content

soup = BeautifulSoup(src, 'html.parser')

results = soup.find_all("div")
titles = []
urls = []
authors = []
authorInfo = []

for result in results:
    if "class" in result.attrs:
        if "rslt" in result['class']:
            titles.append(result.a.string)
            urls.append(result.a['href'])
            authors.append(result.div.p.getText().split(','))

Authors = []
authNames = []
authLocationIndex = []
locations = []
x = 0
# for url in urls:
for i in range(0, 1):
    print(x)
    newUrl = "http://www.ncbi.nlm.nih.gov%s" % urls[0]
    newSoup = BeautifulSoup(requests.get(newUrl).text, 'html.parser')

    # find all author names
    Auths = newSoup.find("div", attrs={'class': 'auths'}).find_all("a")
    for link in Auths:
        authNames.append(link.string)

    # Initialize authLocationIndex size
    for i in range(0, len(authNames)):
        authLocationIndex.append([])

    # get author location index based on page citation number
    # built as a list of lists: [[1], [1,2,3], [9,1]...]
    section = newSoup.find('div', attrs={'class': 'auths'})
    children = section.findChildren()
    i = 0
    for child in children:
        if child.name == "sup":
            if "," in child.string:
                newIndex = child.string.replace(",", "")
                authLocationIndex[i-1].append(int(newIndex))
            else:
                authLocationIndex[i-1].append(int(child.string))
        if child.name == "a":
            i += 1

    # get the location / institute text
    tags = newSoup.find_all("dd")
    for tag in tags:
        className = tag.find_parent().attrs['class'][0]
        if className != 'rprtid':
            locations.append(tag.string)

    # use previous arrays to get an array of author objects with names and locations/institute
    for i in range(0, len(authNames)):
        if len(authLocationIndex[i]) == 1:
            Authors.append({ "author": authNames[i], "title": newSoup.find_all('h1')[1].string, "location": locations[authLocationIndex[i][0]-1].string})
        else:
            multipleLocations = []
            for index in authLocationIndex[i]:
                multipleLocations.append(locations[index-1])
            Authors.append({ "author": authNames[i], "title": newSoup.find_all('h1')[1].string, "location": multipleLocations})
    x += 1
        
    authNames = []
    authLocationIndex = []
    locations = []
    # print(url)
    # print("\n\nAUTHORS HERE", Authors)
    # print("\n\n")
with open('moreauthors.json', 'w') as outfile:
    json.dump(Authors, outfile)
# with open('refs.json', 'w', encoding='utf-8') as f:
    # json.dump(data, f, ensure_ascii=False, indent=4)

# ["Adult",
# "Ambulatory Care*",
# "Chronic Disease",
# "Electronic Health Records",
# "Female",
# "Humans",
# "Information Seeking Behavior*",
# "Interviews as Topic",
# "Male",
# "Middle Aged",
# "Needs Assessment*",
# "Patients*",
# "Primary Health Care*",
# "Qualitative Research",
# "Young Adult"]