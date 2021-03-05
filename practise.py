from urllib.request import urlopen, hashlib
sha1hash = input("Please input the hash to be cracked:\n>")
list_of_common_pw = str(urlopen('Passwords-list-top-1000000.txt') )

for guess in list_of_common_pw.split('\n'):
    hashedGuess = hashlib.sha1(bytes(guess, 'utf-8')).hexdigest()
    if hashedGuess == sha1hash:
        print("The password is ", str(guess))
        quit()
    elif hashedGuess != sha1hash:
        print("Password guess",str(guess),"doesn't match, trying next...")
print("Password is not in DataBase, We will find it next time...")
