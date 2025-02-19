FROM node:14-alpine3.16
# set working directory
WORKDIR /home/frontend/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /home/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /home/frontend/
RUN npm install

# add app
COPY . ./

CMD ["npm", "start"]