# FROM - Docker Image
FROM node:10

# WORKDIR - app directory
WORKDIR /usr/app

# COPY - basically it will add all the dependencies found in the .json files to the docker image.
# it should work with other file types too, like README.md, for example.
COPY package*.json ./

# RUN - the command that the application will be run to add the dependencies and install the required packages
RUN npm install

# COPY (. .) - it will copy all the files to the docker image
COPY . .

# EXPOSE - Expose the server port
EXPOSE 3000

# CMD - the command that will be run the application
CMD ["npm", "start"]