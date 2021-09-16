# @nativescript/angular 12

Clean and setup workspace:

```
yarn clean.all
```

Build angular package:

```
nx run angular:build
```

Run angular demo:

```
nx run nativescript-demo-ng:ios
```

# Replicate fragments bug
On gradle.properties uncomment `androidXFragment=1.3.0`
