FROM node:20.11.1

WORKDIR /robo-board/

COPY public/ /robo-board/public
COPY src/ /robo-board/src
COPY package.json/ /robo-board/

COPY postcss.config.js/ /robo-board/
COPY tailwind.config.js/ /robo-board/
COPY tsconfig.json/ /robo-board/

RUN npm install

CMD ["npm", "start"]