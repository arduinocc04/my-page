FROM ubuntu
MAINTAINER Daniel cho arduinocc04@gmail.com

run apt -qq update && apt -qq upgrade -y
run DEBIAN_FRONTEND=noninteractive apt -qq install texlive-base texlive-binaries texlive-lang-korean texlive-latex-base texlive-latex-extra texlive-latex-recommended texlive-luatex texlive-science texlive-extra-utils npm -y
run DEBIAN_FRONTEND=noninteractive apt -qq install texlive-bibtex-extra -y

WORKDIR /home/root/
run git clone https://github.com/michal-h21/mjcli
WORKDIR /home/root/mjcli
run npm install -g
run npm install mathjax-node-page -g

COPY ./latex2ht.py /home/root/latex2ht.py

WORKDIR /home/root/test

COPY ./test /home/root/test/test

run python3 /home/root/latex2ht.py test test-out
