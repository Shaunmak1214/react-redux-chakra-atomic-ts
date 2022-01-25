#!/bin/bash
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
cmt="Blank"

lf=$'\n'
    while getopts c:p: opt 2>/dev/null
    do
        case $opt in
            c)
                cmt=$OPTARG
                git add .
                git commit -m "$cmt"

                echo ===================================================
                echo Pushing to github branch $branch ...
                echo ===================================================
                git push origin ${branch}
                ;;
            p)
                base="$OPTARG"
                echo $cmt
                echo "Creating pull request to base: $base" >&2

                # Local .env
                if [ -f .env ]; then
                    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')

                    curl --location --request POST 'https://api.github.com/repos/Shaunmak1214/'${REPO_NAME}'/pulls' \
                    --header 'Accept: application/vnd.github.v3+json' \
                    --header 'Authorization: Basic "'"${BASE_64_GITHUB_PERSONAL_TOKEN}"'"' \
                    --header 'Content-Type: application/json' \
                    --data-raw '{
                      "title": "'"${cmt}"'",
                      "head": "'"${branch}"'",
                      "base": "'"${base}"'",
                      "body": "### Please provide a description of the changes made to the pull request."
                    }'
                fi

                ;;
            * )
                emsg="${lf}Invalid option '$opt'"
        esac
    done