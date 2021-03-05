from urllib.request import urlopen, hashlib
sha3hash = input("Please input the hash to be cracked:\n>")
list_of_common_pw = str(urlopen('https://raw.githubusercontent.com/ilkh0m/hashing/main/Passwords-list-top-1000000.txt').read(), 'utf-8')
for guess in list_of_common_pw.split('\n'):
    hashedGuess = hashlib.sha3(bytes(guess, 'utf-8')).hexdigest()
    if hashedGuess == sha3hash:
        print("The password is ", str(guess))
        quit()
    elif hashedGuess != sha3hash:
        print("Password guess",str(guess),"doesn't match, trying next...")
print("Password is not in DataBase, We will find it next time...")