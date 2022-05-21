import os
import shutil


def move_js():
    # [*] Path from where we will take files
    source = './'
    # [*] Path to where we will move files
    destination = './downloads'

    # [*] List all files of the directory
    allfiles = os.listdir(source)
    for i in allfiles:
        # [*] If extension is .js then
        if i.endswith(".js"):
            # [*] Move to the destination folder
            shutil.move(source + "/" + i, destination + "/" + i)
