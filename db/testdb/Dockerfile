FROM mysql:5

ENV MYSQL_ROOT_PASSWORD root
ENV MYSQL_DATABASE users  
ENV MYSQL_USER local  
ENV MYSQL_PASSWORD local

ADD setup.sql /docker-entrypoint-initdb.d  
