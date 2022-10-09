# base image
FROM node:12-alpine
# create the working dir
RUN mkdir -p /src/lendsqr
# set working dir
WORKDIR /src/lendsqr
#copy the package.json file over
COPY ./package.json /src/lendsqr
# install dependencies
RUN npm install --only=prod
# copy the app over
COPY . /src/lendsqr
# expose a port
EXPOSE 4000
# set default cmd
CMD [ "npm", "run", "start" ]

