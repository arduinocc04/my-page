FROM archlinux
MAINTAINER Daniel cho arduinocc04@gmail.com

run pacman -Syu --noconfirm --quiet
run pacman -S perl texlive-basic texlive-bin texlive-latex texlive-latexextra texlive-binextra texlive-latexextra texlive-langkorean texlive-luatex texlive-mathscience npm git --noconfirm --quiet

WORKDIR /home/root/
run git clone https://github.com/michal-h21/mjcli
WORKDIR /home/root/mjcli
run npm install -g
run npm install yargs mathjax-full -g

