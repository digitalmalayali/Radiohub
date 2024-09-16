<div align="center">

<img src="assets/favicon.svg" alt="Radiohub" width="50"/>

# Radiohub
A free, easy-to-use, simple and minimal web template built with [Shoelace](https://shoelace.style/), designed for creating a radio directory.

</div>

## Features
- 😊 No installation or fancy setup; just add station details and streaming URL!
- 📻 Stream stations without leaving the directory! 
- ⚡ Uses [Shoelace](https://shoelace.style/), a powerful web component library!
- 😍 Country flags are powered by [Flag Icons](https://github.com/lipis/flag-icons)!

## Usage
The first step is to click the **Use this template** button above the file list to create a new repository.

### Add station name and website
Go to [index.html](https://github.com/digitalmalayali/radiohub/blob/main/index.html#L38-L42) file and find `header`:

```html
<div slot="header">
    <strong>Radio Digital Malayali</strong>
    <sl-icon-button name="arrow-up-right" label="Visit Website" href="https://radio.digitalmalayali.in/" target="_blank">   
    </sl-icon-button>
</div>
```

### Add station logo and description
Make sure to keep the description short, with 10-13 words, and the logo at a size of 300 pixels in a 1:1 ratio. In [index.html](https://github.com/digitalmalayali/radiohub/blob/main/index.html#L43-L44) file, find `img` tag:

```html
<img slot="image" src="assets/RDM.webp" alt="Radio Digital Malayali Logo" />
A 24/7 Indian lo-fi music web radio initiative by Digital Malayali.
```

### Add country, language and category
Find `badges` in [index.html](https://github.com/digitalmalayali/radiohub/blob/main/index.html#L45-L49) file. Use the two-letter country code ([ISO 3166-1-alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)) to display flags:

```html
<div class="badges">
    <sl-badge variant="success">India<span class="fi fi-in fis"></span></sl-badge>
    <sl-badge variant="success">Malayalam</sl-badge>
    <sl-badge variant="success">Music</sl-badge>
</div>
```

### Add streaming URL
Find `audio` tag in [index.html](https://github.com/digitalmalayali/radiohub/blob/main/index.html#L55-L56) file:

```html
<audio class="audio" src="https://radio.digitalmalayali.in/listen/stream/radio.mp3" preload="none"></audio>
```

## Credits
Logo - [Broadcast pin](https://icons.getbootstrap.com/icons/broadcast-pin/) icon from Bootstrap.