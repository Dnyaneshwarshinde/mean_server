docker build -t my_app_backend .
docker run -itd -p 4000:4000 --name my_app_backend_container my_app_backend
