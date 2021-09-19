# TweetBoat

TweetBoat is a twitter like application where you can do tweets, and follow people around the world. This repository contains server side code implementation.

![](assets/images/tweetboat.png)

## Product Features:

1. Signup
![](assets/images/register.png)

2. Login/Logout
![](assets/images/login.png)

3. Post a status update
![](assets/images/tweet.png)

4. Follow other users
![](assets/images/follow.png)

5. View a feed of the status updates of the users you are following
![](assets/images/feed.png)

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --v

    $ npm --version

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Installation

You need to have node in your system

1. ```git clone https://github.com/Mayankkestwal10/tweetboatserver```

2. ```cd tweetboatclient```

3. ```npm install```

## Dependencies
```
"dependencies": {
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-validator": "^6.12.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.5",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.12",
    "validator": "^13.6.0"
  }
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
