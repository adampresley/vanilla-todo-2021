# Vanilla JS Todo - 2021

I wrote this in response to an [article on Medium](https://javascript.plainenglish.io/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-2021-edition-a7ebfc19a9d) by Sunil Sandhu. In it he does an excellent job comparing how to write a Todo app in React and Vue. He takes plenty of time describing what each block of code does, comparing the two versions side by side. It is a good read (as of 2021). 

As I was reading, I thought to myself, "How might this look in Vanilla JavaScript?" This code is my interpretation.

## Prereqs

Technically you don't need anything except a modern browser and a way to run a static site. If you want to "build" (aka. minify) you'll need NPM, make, and a Linux-style terminal.

## Trying It Out

Go on, clone the repository and give it a try. There are a number of tools out there to run static HTML and JavaScript, but I just tend to use Python.

```bash
python -m SimpleHTTPServer 8080
```

Then, open your browser to `http://localhost:8080` and viola!

## Building

Since this is Vanilla JavaScript there isn't really a "build" phase. But if you want to minify and see a ~3kb savings in your JavaScript and CSS payload, you can install the minifier, then run a make target to build.

```bash
make setup
make build
```

This will minify the JavaScript and CSS into a directory called build. Then you can server the application from the "build" directory.
