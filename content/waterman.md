---
title: The Waterman Butterfly
published: 2025-04-25
description: An exploration of the Waterman Butterfly map projection, its advantages, disadvantages, and visual appeal.
wikipedia: https://en.wikipedia.org/wiki/Waterman_butterfly_projection
---

I'm willing to bet that you've seen a map of the Earth before.

But I doubt that you've seen this one.

![The Waterman Butterfly map: an unusual world map in a butterfly shape, showing the continents arranged in eight connected lobes](/media/waterman.webp)

This is the [Waterman Butterfly](https://en.wikipedia.org/wiki/Waterman_butterfly_projection), an alternative map projection invented by the mathematician Steve Waterman.

In my experience, most people's first reaction upon seeing the Waterman is _"Wow, that's so pretty!"_, followed by _"Wow, what a goofy and impractical map!"_

However, I think that the Waterman has some genuine advantages over many map projections. It's definitely not perfect, but its much more useful that it might appear at first glance.

## All map projections are wrong

First, a bit of background information. Because the Earth is a 3D sphere and maps are 2D images, if you want to display the Earth's surface onto a map, you need to do some mathematics to convert it. Critically, this conversion *always* sacrifices something. It's [mathematically impossible to make a perfect map projection](https://en.wikipedia.org/wiki/Theorema_Egregium), so you have to consider the trade-offs and choose what's most important to preserve and what you're willing to sacrifice.

Mercator's infamous [Greenland distortion](https://en.wikipedia.org/wiki/Mercator_projection#Distortion_of_sizes) is a good example. On a Mercator map, Greenland looks to be about the same size as the continent of Africa. In reality, if you were to start counting acres, you would find that Greenland is 14 times less land than Africa, and in fact has less land than the DRC alone. The reason that this happens is that the Mercator projection sacrifices representing land accurate in exchange for representing angles accurately. Because Greenland is far away from the equator, it gets distorted by the Mercator projection to appear far, far larger than it really is. Africa is quite close to the equator, so it gets distorted very little.

![GIF An animation of how the Mercator map misrepresents area](/media/mercator_distortion.webm "the Mercator projection distorts area")

There are lots of different map projections, each optimizing for different things. For example, the [Lambert azimuthal projection](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection) perfectly represents area at the cost of horribly misrepresenting angles. The further from the center you go, the more "squishy" everything looks. For example, look at Australia in the image below. Even though its area is perfectly represented, its shape is so squished that it's almost unrecognizable.

![A 180 degree Lambert azimuthal projection: a circular map projection that preserves area at the cost of severely squishing and stretching landmasses further from the center](/media/lambert_azimuthal.webp "the Lambert azimuthal projection distorts angles")

Map design isn't about creating the "perfect" map projection for all use cases, just like how the automotive industry isn't about creating the "perfect" vehicle that works equally well for daily commutes, racing, and long-haul trucking. Variety is important so that the right projection can be used for the right map.

If you're a 16th-century sailor with only a compass, a Mercator map makes navigation pretty easy. If you're the United Nations trying to decide on a flag that represents all countries equally, an azimuthal map is pretty diplomatic.

That being said, some projections are better than others.

## Advantages of the Waterman

![An alternate version of a Waterman map, with Antarctica detached from the main butterfly](/media/waterman_alt.webp)

### Accuracy

The Waterman is one of the most accurate map projections. Full stop. It doesn't *perfectly* preserve either area or angles, but it compromises between them to acheive one of the lowest distortion ratios of any known map projection. The maximum angle distortion on the Waterman is about 20° and the maximum area distortion is about 10%. 

To put that into perspective, let's compare the area distortion of the Waterman to that of the Mercator. The amount that the Mercator projection distorts area is unbounded (meaning at the exact north pole, the area distortion approaches infinity), but usually people crop the Mercator projection to only show 85° of latitude or less. At 85°, the Mercator projection distorts land by 13,165%. Yes, [really](https://www.wolframalpha.com/input?i=sec%5E2%2885%29). It's a distortion factor of 131x. Even if you crop it to 45° of latitude (meaning you couldn't see anything above Southern France), the Mercator projection still distorts area by a factor of 2x. The Waterman's 10% area distortion is practically neglibile in comparison.

### Unintuitiveness

Strange as it sounds, you don't want a map to seem intuitive. Map projections that project the Earth onto everyday 2D shapes like circles and rectangles tend to make people think that they understand the geometry better than they actually do.

For example, if I were to ask you "what's the shortest path between two points on a 2D rectangle", you would probably respond with the correct answer: "a straight line between those two points". So it follows that if I were to ask you "what's the shortest path between two points on a map shaped like a 2D rectangle", you would respond "a straight line between those two points". But you would be wrong.

To demonstrate, I made this image of two routes between [Stonehenge (Salisbury, England)](https://en.wikipedia.org/wiki/Stonehenge) and [Stonehenge (Odessa, Texas)](https://www.utpb.edu/success/2024/06/faces-of-utpb-stonehenge), displayed on the Mercator projection.

![A Mercator map with an orange line and a blue line, both going from west Texas to south England. The orange line is perfectly straight and is labeled 5322.57 miles. The blue line is curved significantly and is labeled 4961.73 miles. Image generated via Wolfram Language and manually annotated](/media/stonehenge_great_circle_route.webp "Stonehenge → Stonehenge")

Intuitively, the orange route looks to be the shortest. On a rectangle, direct routes are always the shortest, and the map is a rectangle. Ipso facto, the direct route is the shortest. And yet, if you were to actually travel these routes, you'd find that the although the orange route is 5322.57 miles, the blue route is only 4961.73 miles ([source](https://gist.github.com/ethmarks/30213b699ea5d90eb25a806d78fcf1c1)). Even though the blue route appears curved and indirect on the map, it's significantly shorter.

This is because the blue route is an example of a [great circle route](https://en.wikipedia.org/wiki/Great-circle_navigation), which are mathematically defined as the shortest possible routes between two points on a sphere. Because the Earth is a sphere, the blue route is the shortest possible route. It only looks curved and inefficient as a result of Mercator distortion.

Rectangular maps lull people into a false sense of understanding. People understand how rectangles work, so they assume that rectangular maps work the same way, even though they don't. The Waterman solves this problem by being a butterfly. Most people don't have an intuitive understand of the geometry of butterflies, so people are untrustful of its geometry and less likely to make false assumptions.

### Aesthetics

![A large Waterman map on the wall of an office](/media/waterman_poster.webp)

The Waterman is an objectively beautiful map. 

Of course, beauty is subjective, but it isn't *that* subjective. Humans almost universally appreciate symmetry, and the Waterman not only has perfect vertical symmetry, but it's composed of four symmetric pairs of equilateral triangles; triangles which themselves have horizontal, vertical, and rotational symmetry. The Waterman has 4 five-pointed stars in the negative space of each vertex of the central rhombus (which has geometrically-pleasing proportions of `1:√3`), one of which forms leading lines towards the North pole. There's *tons* of geometric elegance in the Waterman that makes it visually striking and pleasing to look at.

Beyond geometry, there's also symbolism. The Waterman is in the shape of a butterfly: a symbol of wildness and nature and exploration. Rather than conforming to a standardized rectangle or circle, the Waterman's form is unique and striking, which is befitting of a depiction of the one and only Earth.

While the Waterman's accuracy and unintuitiveness makes it useful pedagogical tool, its visual elegance makes it useful for decoration. Putting a Mercator map or a Robinson map in a hallway evokes a theme of either a schoolroom or a sailor's cabin, neither of which are usually desirable for your home or office or whatever. The Waterman evokes a *completely* different theme: one of simultaneous classical elegance and sleek modernity.

I also have anecdotal evidence: I've shown the Waterman to a lot of people over the years, and I've never once encountered someone who actively disliked the aesthetics (though lots of people had critiques on the practicality).

The Waterman is one of the beautiful ways to view the Earth.

## Problems with the Waterman

![A Waterman map centered in the Pacific ocean at 160 degrees East](/media/waterman_alt2.webp)

### Discontinuity

Remember when I said that all map projections have to sacrifice something? The main thing that the Waterman sacrifices is continuity. 

Most maps are one solid shape that loop around on the edges (exception: globes). The only time that you would "teleport" on a Mercator map is if you crossed the 180th meridian or one of the North or South poles. On a Waterman map, there are lots of places that you would teleport. For example, the equator on a Waterman map is broken into four discontinuous lines. I've highlighted them in red in the image below.

![A Waterman butterfly with the equator highlighed in red. The equator is broken into four non-connected lines, two of which are at 30 degree angles and the other two are at 90 degree angles](/media/waterman_equator.webp)

If you were to travel along the equator and watch your progress on a Waterman map, you would notice that once you reached the end of one equator segment, you would appear to suddenly teleport over 5000 kilometers. On most maps, this isn't a problem. Even on maps where the equator is a curve instead of a straight line(s), it's still usually continuous, though [there](https://en.wikipedia.org/wiki/Cahill%E2%80%93Keyes_projection) [are](https://en.wikipedia.org/wiki/Goode_homolosine_projection) [a](https://xkcd.com/3122/) [few](https://vanwijk.win.tue.nl/myriahedral/) [exceptions](https://en.wikipedia.org/wiki/Dymaxion_map). 

![An xkcd comic demonstrating how split map projections can make close distances appear to be far away](/media/xkcd_2577.webp "xkcd.com/2577")

The Waterman has much more "teleportation" than most other maps, which can be kind of confusing, especially because it's not always immediately obvious where you'll end up if you cross a discontinuity.

### Relative North

On most common maps like the Mercator or the Robinson, North is always up. All 'up' things are 'north', and vise versa. The two directions are equivalent.

![A scene from It's Always Sunny in Philadelpha where Charlie says 'I thought north was like, up' and Frank responds 'Up?'](/media/IASIP_north_up.webp)

But on the Waterman, 'north' no longer always means 'up'. Instead, north varies by location. In the US, north is to the upper-right, but in Europe, north is to the upper-left. In Australia, north is to the to the left and slightly *down*. Iceland is the *only* country on the Waterman where north is directly upwards.

This can be disorienting and takes quite a bit of getting used to. It also makes it much more difficult to describe locations in relation to the cardinal directions.

![A waterman map](/media/waterman_alt3.webp)

## Bonus: how the Waterman works

The Waterman projection is one of the uses the Steven Waterman found for his [Waterman Polyhedra](https://www.watermanpolyhedron.com/). The mathematics is a bit advanced, but I'll do my best to ELI5 it.

![A truncated octahedron made out of cardboard with oceans and continents printed onto it](/media/waterman_octahedron.webp "A Waterman map in truncated octahedron form")

To start, take two pyramids, join their ends together, and chop their corners off. This results in a 14-sided shape called a [truncated octahedron](https://en.wikipedia.org/wiki/Truncated_octahedron) with 8 hexagonal faces and 6 square faces. This shape is special because it has perfectly flat faces while still being very "round" and sphere-like. 

Next, project each point from a sphere (the Earth, in this case) onto the closest corresponding point on the truncated octahedron. Because truncated octahedrons are so sphere-like, each point only moves a little bit, resulting in only a small amount of projection distortion. Finally, cut a few specific edges to unfold the truncated octahedron into a flat 2D shape, and *voilà*! You now have a Waterman map.

## Conclusion

![A Waterman map laser etched onto wood](/media/waterman_lasercut.webp)

I love the Waterman butterfly. I think that it is genuinely one of the best map projections, and I wish it was used more.

Over the last few years, several of the websites that used to host ultra-resolution images of Waterman maps have shut down. I discovered this to my dismay while I was researching this post. Thankfully, I had the foresight to save two Waterman maps to my hard drive a few years ago. 

- One is a 19,000x11,033 pixel image of the Waterman map created by [Boris Müller](https://archive.is/JH3zz). It's my personal favorite, and it's so high-resolution that it can be printed 10.6 feet wide and 6.2 feet tall at 150dpi.
- The other is a 7000x5400 pixel image of a Waterman map by an unknown author (I don't remember where I found it), but I found a lower-quality version [here](https://www.reddit.com/r/interestingasfuck/comments/2w421k/undistorted_world_map/). 

Unfortunately, because the images are so heavy (the Müller one weights 117.8 megabytes, which is heavier than all other assets on my site put together), I can't host them on this site. So if you want them, feel free to [get in touch](mailto:ethmarks.dev@gmail.com) and I'll send them to you!

~Ethan
