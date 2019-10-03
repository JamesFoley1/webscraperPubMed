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
            urls.append(result.a['href'])
            # if "icons portlet" in result['class']:
            
urls = [
    {
        "title": "Toward a patient-centered ambulatory after-visit summary: Identifying primary care patients' information needs.",
        "refUrl": "https://www.tandfonline.com/doi/ref/10.1080/17538157.2017.1297305"
    },
    {
        "title": "Dynamic Electronic Health Record Note Prototype: Seeing More by Showing Less",
        "refUrl": "https://www.jabfm.org/content/30/6/691/tab-references"
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },
    {
        "title": "",
        "refUrl": ""
    },

]
# for url in urls:
for i in range(0, 1):
    # newUrl = "http://www.ncbi.nlm.nih.gov%s" % url
    newUrl = "http://www.ncbi.nlm.nih.gov/pubmed/30590550"

    newSoup = BeautifulSoup(requests.get(newUrl).text, 'html.parser')

    newResults = soup.find_all("div")
    # newResults = soup.find_all("a")
    # print(newResults)
    for result in newResults:
        if "class" in result.attrs:
            if "linkoutlist" in result['class']:
                print(result)
            # print("\n\n", result.a['href'])



# print(titles)
# print(urls)
# print(authors)
# print(len(titles))
Authors = []
authNames = []
authLocationIndex = []
locations = []
# for url in urls:
# for i in range(0, 1):
#     # newUrl = "http://www.ncbi.nlm.nih.gov%s" % url
#     newUrl = "http://www.ncbi.nlm.nih.gov/pubmed/30590550"

#     newSoup = BeautifulSoup(requests.get(newUrl).text, 'html.parser')

#     # find all author names
#     Auths = newSoup.find("div", attrs={'class': 'auths'}).find_all("a")
#     for link in Auths:
#         authNames.append(link.string)

#     # Initialize authLocationIndex size
#     for i in range(0, len(authNames)):
#         authLocationIndex.append([])

#     # get author location index based on page citation number
#     # built as a list of lists: [[1], [1,2,3], [9,1]...]
#     section = newSoup.find('div', attrs={'class': 'auths'})
#     children = section.findChildren()
#     i = 0
#     for child in children:
#         if child.name == "sup":
#             if "," in child.string:
#                 newIndex = child.string.replace(",", "")
#                 authLocationIndex[i-1].append(int(newIndex))
#             else:
#                 authLocationIndex[i-1].append(int(child.string))
#         if child.name == "a":
#             i += 1

#     # get the location / institute text
#     tags = newSoup.find_all("dd")
#     for tag in tags:
#         className = tag.find_parent().attrs['class'][0]
#         if className != 'rprtid':
#             locations.append(tag.string)

#     # use previous arrays to get an array of author objects with names and locations/institute
#     for i in range(0, len(authNames)):
#         if len(authLocationIndex[i]) == 1:
#             Authors.append({ "author": authNames[i], "title": newSoup.find_all('h1')[1].string, "location": locations[authLocationIndex[i][0]-1].string})
#         else:
#             multipleLocations = []
#             for index in authLocationIndex[i]:
#                 multipleLocations.append(locations[index-1])
#             Authors.append({ "author": authNames[i], "title": newSoup.find_all('h1')[1].string, "location": multipleLocations})
        
#     authNames = []
#     authLocationIndex = []
#     locations = []
    # print(url)
    # print("\n\nAUTHORS HERE", Authors)
    # print("\n\n")

# with open('refs.json', 'w') as outfile:
    # json.dump(Authors, outfile)
# with open('refs.json', 'w', encoding='utf-8') as f:
    # json.dump(data, f, ensure_ascii=False, indent=4)