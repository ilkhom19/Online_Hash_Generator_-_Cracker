import hashlib
password = input("Create a password:\n>")
print("\nSHA1:\n")
for i in range(2):
        setpass = bytes(password, 'utf-8')
        hash_object = hashlib.sha1(setpass)
        guess_pw = hash_object.hexdigest()
        print(guess_pw)
#print("\nSHA3:\n")
#for i in range(2):
        #setpass = bytes(password, 'utf-8')
        #hash_object = hashlib.sha3_256(setpass)
       # guess_pw = hash_object.hexdigest()
       # print(guess_pw)

#print("\nMD5:\n")
#for i in range(3):
       # setpass = bytes(password, 'utf-8')
       # hash_object = hashlib.md5(setpass)
       # guess_pw = hash_object.hexdigest()
       # print(guess_pw)

