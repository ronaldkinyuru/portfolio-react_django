This readme is for react django 
#setup.sh
apt install python3.8-venv
 python3 -m venv env
 source env/bin/activate #activate py env
 pip install -r requirements.txt #must install on new env
pip install django
pip install djangorestframework django-cors-headers
 django-admin startproject backend #create django app called backend
/jwt auth*/

setup
pip install django djangorestframework django-cors-headers djangorestframework-simplejwt
python3 makemigration
python3 migrate
python3 manage.py runserver /*run your django server on localhost:8000*/
pip install django-environ
pip install -U djoser
pip install -U djangorestframework_simplejwt

#frontend

npm create vite@latest frontend -- --template react
