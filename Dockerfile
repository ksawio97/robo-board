FROM node:20.11.1 as builder

WORKDIR /robo-board/
#copy necessary files
COPY public/ /robo-board/public
COPY src/ /robo-board/src
COPY package.json/ /robo-board/

COPY postcss.config.js/ /robo-board/
COPY tailwind.config.js/ /robo-board/
COPY tsconfig.json/ /robo-board/

RUN npm install
RUN npm run build

FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy build from Stage 1
COPY --from=builder /robo-board/build /usr/share/nginx/html

# Start nginx
CMD ["nginx", "-g", "daemon off;"]