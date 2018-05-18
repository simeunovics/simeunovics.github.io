---
path: '/terminal-shortcuts'
title: 'Terminal Shortcuts'
date: 2018-05-17
---

* [Terminal](#terminal) | [GIT](#git) | [Docker](#docker)

### <a name="terminal"></a> Terminal

```bash
alias vm="vagrant"
alias pretty="python -mjson.tool"
alias phpshell="psysh"
alias t="php vendor/bin/phpunit"
```

### <a name="git"></a> GIT

```bash
alias g="git"
alias nah="git reset --hard; git clean -df;"
alias cim="git commit -m"
alias add="git add"
alias st="git status"
alias diff="git diff"
alias stash="git stash"
alias push="git push"
alias co="git checkout"
alias pull="git pull"
alias merge="git merge"
alias show="git show"
```

### <a name="docker"></a> Docker

```bash
alias docoup="docker-compose up"
alias docker-nuke='docker stop $(docker ps -a -q); docker rm $(docker ps -a -q); docker rmi -f $(docker images -a -q)'
```
