# Software Developer Portfolio
An open source, clean, beautiful, responsive portfolio

To view a live example, **[click here](https://ayoubmetwalli.com/)**

# Sections 

✔️ Resume\
✔️ About me\
✔️ Experience\
✔️ Education\
✔️ Skills\
✔️ Contact me

# Make it your own portfolio

### Package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`.

### Personal Information

Just change `src/data.js` to get your personal portfolio. Feel free to use it as-is or personalize it as much as you want.

If you'd like to **contribute** and make this much better for other users, have a look at [Issues](https://github.com/metayoub/portfolio/issues).

Created something awesome for your fork of the portfolio and want to share it? Feel free to open a [pull request](https://github.com/metayoub/portfolio/pulls).

### EMAILJS

To use EmailJS to receive mails

**Option 1:**

- Create .env file and add 

```bash
    REACT_APP_mailService=... 
    REACT_APP_mailTemplate=...
    REACT_APP_mailToken=...
```

**Option 2:**
- Otherwise go to settings of the repository and select Environments
- Add secrets

```bash
    REACT_APP_mailService
    REACT_APP_mailTemplate
    REACT_APP_mailToken
```

# Deployment
- Once you are done with your setup and have successfully completed all steps above, you need to put your website online!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) to achieve this the EASIEST WAY.
- To deploy your website, you have two options. First you need to create a github repository with the name `<your-github-username>.github.io`. Please don't give it any other name.
- Run `npm run deploy` to build and create a branch called `gh-pages`. It will push the `build` files to that branch.
- The last step in deploying is to enable `Github Pages` in settings of the repository and select `gh-pages` branch.

# Technologies used

- [React](https://reactjs.org/)
- [tailwindcss](https://tailwindcss.com/)
- [headlessui](https://headlessui.dev/)
- [emailjs](https://www.emailjs.com/)

# License 📄
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

# Contributing
If you can help us with these. Please don't hesitate to open an [pull request](https://github.com/metayoub/portfolio/pulls) or [issue](https://github.com/metayoub/portfolio/issues).

# TODO
- Add SEO.
- Add Dark Mode.
- Support Theme and color scheme.
- Support Multiple languages.
- Add Blog template.
- Add tests.
- use LinkedIn to get Summary, Skills, Education and Experience.

