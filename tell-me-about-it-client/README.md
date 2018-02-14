# README

## Application Description

Tell Me About It is a Momentum-like application that keeps the tools for creating and editing blog posts on a simple homescreen. The application has a built in text editor with support for rich-text styles and exports to markdown. When logged in to github the app can post straight to your github pages. Drafts can be persisted with the help of a rails API backend. See tell-me-about-it-api.

## Installation

Download the repo, cd into the tell-me-about-it-client directory then run the migrations

```
npm start
```

You will also need to have the rails server running: 

In a new terminal window cd into the tell-me-about-it-api directory and

```
bundle install
```
Then start the rails server. The client expects it to be running on port 3001:

```
rails s -p 3001
```

## Contributions

Want to contribute? Great. File an issue with a pull-request for your fix or feature.

## Licensing

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.