# Complete Node.js Expess MongoDB CRUD


# Voici quelques exemples génériques de règles dans un fichier .gitignore , basées sur des modèles de fichiers glob :
# Lines starting with `#` are comments. : Les qui débutent par un "#" sont des commentaires dans .gitignore

# Ignore files called 'file.ext'
file.ext

# Comments can't be on the same line as rules!
# The following line ignores files called 'file.ext # not a comment'
file.ext # not a comment 

# Ignoring files with full path.
# This matches files in the root directory and subdirectories too.
# i.e. otherfile.ext will be ignored anywhere on the tree.
dir/otherdir/file.ext
otherfile.ext

# Ignoring directories
# Both the directory itself and its contents will be ignored.
bin/
gen/

# Glob pattern can also be used here to ignore paths with certain characters.
# For example, the below rule will match both build/ and Build/
[bB]uild/

# Without the trailing slash, the rule will match a file and/or
# a directory, so the following would ignore both a file named `gen`
# and a directory named `gen`, as well as any contents of that directory
bin
gen

# I got into this situation a few times, so I made a one-liner I can paste into terminal in my project directory:
touch .gitignore && echo "node_modules/" >> .gitignore

# Or, when I've added the node_modules folder to git already: RETIRER LE DOSSIER NODE_MODULES DES ELEMENTS A COMMITER
git rm -r --cached node_modules && touch .gitignore && echo "node_modules/" >> .gitignore   ou   git rm -r --cached node_modules

# Then, validate that it worked:
git status