# Dustup

Reference fighting game moves from your phone!

## Development

Dustup is powered by [React Native](https://facebook.github.io/react-native/).
To get a development environment running you'll need `npm`.

```
git clone https://github.com/dustup/dustup
cd dustup
npm install
```

Optionally you'll need to open your firewall if you desire to use [Expo](https://expo.io/) to live demo Dustup on a mobile device during development.

```
# on a system with firewalld
sudo firewall-cmd --add-port 19000-19001/tcp
sudo firewall-cmd --add-port 19000-19001/tcp --permanent
```

Then crank it up:

```
npm start
```
