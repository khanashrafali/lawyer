set -e
set -x

# ng build --project website && ng run website:server
# ng b website
ng b admin-panel --base-href=/admin/
# mv -vf ./dist/website ./webApp/dist || true
git add .
git commit -m "push new changes !"
git push

# aws s3 cp ./dist/admin-panel/ s3://admin.manihar.in/ --profile=hexa --recursive
# aws cloudfront create-invalidation --distribution-id E1JLOT8606LQGW --paths "/" --profile=hexa
# cd webApp
# eb deploy
