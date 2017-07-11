# ObjectMaker - Reactive Forms

It uses nested Reactive Forms with FormArray, FormGroups and respective validations to real-time render an output object.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Getting Started

### Prerequisites

Make sure you have Node 6.9.0 or higher, together with NPM 3 properly installed (https://nodejs.org/en/download/)

### Installing

Open a command line console (Run the below commands as root user to avoid permission errors).

Install Angular CLI

```
npm install -g @angular/cli
```

Navigate to the project root directory

Install NPM dependencies

```
npm install
```

## Development server

```
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

```
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## UI Guide

The User Interface of this application has 2 sections, a tab container which divides a nested form in 5 different categories and a section dedicated to render the result of the current setup of the attributes form in real-time.

The tab navigation bar has two arrows on each side to reveal hidden tab buttons hidden by the container in case the horizontal space is not enough.

Each tab content has an "Add Attribute" button which generates a form into the current tab only. Every generated form has some fields which get disabled, enabled, shown or hidden depending on the DataType/Format values combination. Once a new attribute is added, the object output gets updated with a new object including some default data.

Name and Description fields remain enabled regardless the Data Type and Format values.

Data Type = String and Format = None shows a widget to add enumeration items

* The add enumeration button keeps disabled unless there's some text in the "New enumeration" input field
* Once a enumeration is added, it can be deleted by clicking on its respective cross icon

Data Type = String and Format = Number shows a sub-form with some special range validations

* Float numbers are accepted
* Range min value must be lesser than Range max value
* The UoM (Unit of Measurement) field hasn't any validations
* Precision and Accuracy fields must exactly divide the difference between the two ranges

Data Type = String and Format = Boolean, CDATA or URI don't show any extra feature or further validations

Data Type = Object disables Format and "Default Value" fields

The "Save" button remains disabled unless there's no fields marked as invalid

Each generated attribute form has a red button with a white trash bin icon to delete the attribute form itself from the tab content and the object output as well.

## Contributing

This project is not intended to be forked

## Authors

* **Johann Garrido** - [urzolaj](https://github.com/urzolaj)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Further help

Contact the author via email: johann.gz@gmail.com

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
