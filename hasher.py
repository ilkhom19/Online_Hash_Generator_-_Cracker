import hashlib

def convert():
    password = input("Create a password:\n>")
    print("\nSHA1:\n")
    for i in range(1):
        setpass = bytes(password, 'utf-8')
        hash_object = hashlib.sha1(setpass)
        guess_pw = hash_object.hexdigest()
        return guess_pw
a = convert()
print(a)