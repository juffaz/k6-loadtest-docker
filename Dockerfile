FROM loadimpact/k6

COPY script.js /script.js

CMD ["run", "/script.js"]
