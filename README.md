# Welcome to your Bit Workspace

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

## Setup bit
```
> yarn global add @teambit/bvm
> bvm install
```

## Run Locally
```
> bit install
> bit compile
> bit start
```

## Adding a new component
```
> bit add ui/<component_name>
```

## Removing a component
```
> bit remove ui/<component_name>
```

## Publishing a component (after adding it)
```
> bit tag --all --message "some message"
> bit export
```

## Troubleshooting
For `bit not found` errors, run:
```
> echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc && source ~/.bashrc
```
