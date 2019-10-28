# FROM - Docker Image
FROM node:10

# WORKDIR - app directory
WORKDIR /usr/src/app

# COPY - basically it will add all the dependencies found in the .json files to the docker image.
# it will work with other file types too, like README.md, for example.
COPY package*.json ./

# RUN - the command that our application will be run to add the dependencies and install the required packages
RUN npm install

# COPY (. .) - it will copy all the files to our docker image
COPY . .

# EXPOSE - Expose the port server
EXPOSE 3000

# CMD - the command that will be run our application
CMD ["node", "src/server.js"]