FROM node
WORKDIR /src
RUN npm install -g nodemon
COPY package.json package.json
RUN npm install
RUN mv /src/node_modules /node_modules
COPY . .
EXPOSE 80
CMD ["nodemon","server.js"]
