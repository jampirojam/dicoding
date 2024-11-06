# LIST
x = [1, 'Dicoding', True, 1.0, 'Test']

print(x)

# indexing
x[0] = 'Indonesia'
print(x)
print(x[1])

# slicing
print(x[0:5:2])
print(x[1:])
print(x[:3])

# TUPLE
x = (5, 'program', 1+3j)
print(x)
# x[1] = 'Dicoding' # will error
print(x[1])
print(x[0:3])

# SET
x = {1,2,7,2,3,13,3}
# print(x[0]) # will error

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1.union(set2)
print("Union:", union)

intersection = set1.intersection(set2)
print("Intersection:", intersection)

# DICTIONARY
x = { 'name': 'Perseus Evans', 'age': 20, 'isMarried': False }
# print(x[0]) # will error
print(x ['name'])
print(x)

# add key and value
x ['Job'] = "Web Developer"
print(x)

# delete key and value
del x['isMarried']
print(x)

# update value
x ['name'] = "Dicoding"
print(x)
