#!/usr/bin/python

import os
from os import path
import sys
import re
import shutil

def add_font_for_hangul(content):
    """
    Because using usepackage twice doesn't make error, just add.
    """
    for i, line in enumerate(content):
        content[i] = re.sub(r"\\usepackage.*kotex.*", r"\\usepackage{dhucs-nanumfont}\n\\usepackage{kotex}", line)

def find_main_tex_file(input_file_or_folder):
    """
    If given path is file, just return that file.
    If given path is directory:
        1. find main.tex in the dir.
        2. find DIRECTORYNAME.tex in the dir.
        3. find main.txt which contains name of main tex file.
    """
    if not path.isdir(input_file_or_folder):
        return input_file_or_folder

    if path.isfile(path.join(input_file_or_folder, "main.tex")):
        return path.join(input_file_or_folder, "main.tex")

    if path.isfile(path.join(input_file_or_folder, f"{input_file_or_folder}.tex")):
        return path.join(input_file_or_folder, f"{input_file_or_folder}.tex")

    if path.isfile(path.join(input_file_or_folder, "main.txt")):
        with open(path.join(input_file_or_folder, "main.txt"), 'r', encoding='utf8') as f:
            return f.readline().strip()
    return None

def uni2hangul(content):
    def repl_hangul(matchobj):
        return chr(int(matchobj.group(1)))

    for i, line in enumerate(content):
        content[i] = re.sub(r"&amp;#(\d+)", repl_hangul, line)

def change_unis_in_html(file_name):
    with open(file_name, 'r', encoding='utf8') as f:
        content = f.readlines()
    uni2hangul(content)
    with open(file_name, 'wt', encoding='utf8') as f:
        for line in content:
            f.write(line)

def get_file_name_without_ext(name):
    return "".join(name.split('.')[:-1])

def get_file_name_without_dir(name):
    return name.split("/")[-1]

def copy_useful_files(src, dest):
    white_list = [".css", ".jpg", ".png", ".html", ".svg"]
    for file in os.listdir(src):
        for ext in white_list:
            if ext in file:
                shutil.copyfile(path.join(src, file), path.join(dest, file))
                break

def remove_unuseful_files(dir):
    """
    이렇게 구현하지 말고 기존에 있던 파일 이름 리스트 저장해놓고, 없던거 생기면 지우는걸로 구현?
    -> 나중에. 어쩌면 빌드된 파일 말고는 다 지워버리도록 코드 바꿀수도 있음..
    """
    white_list = [".tex", ".jpg", ".png", ".csv", ".cpp", ".py", ".svg", ".pdf"]
    for file in os.listdir(dir):
        if path.isdir(path.join(dir, file)): continue
        remove = True
        for ext in white_list:
            if ext in file:
                remove = False
                break
        if remove: os.remove(path.join(dir, file))

def get_dir_from_file_name(name):
    if '/' not in name:
        return '.'

    return "".join(name.split('/')[:-1])

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("give input file/folder and output folder.")
        exit()

    input_file_name = find_main_tex_file(sys.argv[1])
    if not input_file_name:
        print("Can't find main tex file!!!")
        exit()

    with open(input_file_name, 'r', encoding='utf8') as f:
        content = f.readlines()

    add_font_for_hangul(content)

    tmp_out_file_name = input_file_name.replace(".tex", "-build.tex")
    with open(tmp_out_file_name, 'w', encoding='utf8') as f:
        for line in content:
            f.write(line)

    parent_dir = get_dir_from_file_name(input_file_name)
    stream = os.popen(f"cd {parent_dir} && make4ht -f html5 {get_file_name_without_dir(tmp_out_file_name)} -d ../tmp_build/ \"mathjax\"")
    print(stream.read())

    tmp_out_file_name_without_ext = get_file_name_without_ext(tmp_out_file_name)

    for file in os.listdir("tmp_build"):
        if ".html" in file:
            change_unis_in_html(path.join("tmp_build", file))

    output_folder_name = sys.argv[2]
    if not path.isdir(output_folder_name):
        os.mkdir(output_folder_name)


    copy_useful_files("tmp_build", output_folder_name)

    shutil.rmtree("tmp_build")
    os.remove(tmp_out_file_name)
    remove_unuseful_files(parent_dir)
