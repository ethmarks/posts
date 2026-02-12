---
title: A new measurement system
published: 2026-02-09
desc: There are two different definitions of a "second", the one you learned and the one that every scientist, computer, and yardstick uses. The two definitions are fundamentally incompatible and have so much technical debt that humanity would be better off starting afresh.
---

If I were to ask you "How many seconds are in a day?", you would probably either know an answer off the top of your head or could easily calculate one. Your answer would almost certainly be "86,400". Your answer would be wrong.

Well, kind of. It depends on what you meant by "second".

## A Tale of Two Seconds

### Natural Seconds

In elementary school, you learned that there are 24 hours in a day, 60 minutes in an hour, and 60 "seconds" in a minute. This is the common definition of a second, and it's the only one most people learn. There are several names for this second, including "civil second", "solar second", and "UT1 second". I'm going to call it the "natural second".

The natural second has an exact-valued relationship with the length of the day (or, more precisely, the duration of Earth's rotational period). Specifically, there's an 86,400:1 relationship between the length of the natural second and the length of the day. Using this definition of "second", your answer to my original question is correct. However, the natural second is not the officially "correct" second.

### Caesium Seconds

Both the SI (metric) system and the customary (U.S.) system define _all_ of their units in terms of the second, one way or another. The SI meter is defined as "the distance that light travels in a vacuum during `1/299,792,458` of a second". If you didn't know how long a "second" is, you also wouldn't know how long a meter is, so the definition of a meter relies on the definition of a second.

Even units that aren't directly defined via seconds can still be reliant on it. For example, the customary foot is defined as _exactly_ `0.3048` meters, so because it's based on meters and meters are based on seconds, the customary foot is ultimately based on seconds. Likewise, because the SI kilogram is defined in terms of the speed of light, the Planck constant, and the SI meter, it too is based on seconds. The customary pound is defined as exactly `0.45359237` kilograms, so it relies on kilograms which rely on meters which rely on seconds. _Every_ unit ultimately relies on the second. Because of this, it's absolutely critical that we know **exactly** how long a second is.

The natural second is not good enough for this. The natural second is defined in terms of the length of the day, and the length of the day changes a tiny, tiny amount every day (mainly due to the Moon's gravitational pull gradually slowing Earth's rotation over the course of millions of years). Because of this, the definition of a natural second is ever so slightly different every day. This is obviously unacceptable; nobody wants to update yardsticks because the definition of a foot changed.

So scientists decided to use a unit of time that doesn't ever change: the ground-state hyperfine transition of a caesium-133 atom. That's a lot of jargon, but all you need to know is that it's a very specific duration of time that is extremely stable and can be reproducibly measured using laboratory equipment. The only problem is that it's very, very, very small: approximately 9 billion times smaller than a natural second. So the solution was to define "second" to mean "the ground-state hyperfine transition of a caesium-133 atom multiplied by exactly `9,192,631,770`". This definition also has several names, including "SI second", "atomic second", and "proper second". I'm going to call it the "caesium second".

### The difference

A caesium second is approximately equal to a natural second, but it's not _exact_. The percent difference is usually [around](https://www.wolframalpha.com/input?i=%28%28mean+solar+day+%2F+86400%29+-+SI+second%29+%2F+%28%28%28mean+solar+day+%2F+86400%29+%2B+SI+second%29+%2F+2%29) `0.000002%`, which is so small that the two seconds are often considered "close enough", the subtle differences between them are ignored, and the two are used interchangeably, despite being fundamentally different. More on that later.

Anyways, if we define a "second" to mean a caesium second, the answer to "How many seconds are in a day?" is [approximately](https://www.wolframalpha.com/input?i=SI+seconds+in+a+mean+solar+day) 86,400.002.

### Why it matters

This might sound like pedantic hair-splitting. And okay, it kind of is. But the difference between caesium seconds and natural seconds does have real consequences.

Almost every internet-connected time display (including your phone/laptop/whatever) uses caesium seconds. The second hand on a smartwatch ticks forward every caesium second, _not_ every natural second. This means that 86,400 ticks of a smartwatch is _slightly_ less than the time it takes for Earth to complete a full rotation. Over a long enough time period, these errors compound, and your clock will drift out of sync with the Earth. As of 2026, the errors [should amount to](https://www.nist.gov/pml/time-and-frequency-division/time-realization/leap-seconds#leap-seconds-inserted-into-the-utc-time-scale) 27 (caesium) seconds of difference over the past 54 years.

And yet, your smartphone stays almost perfectly in sync with the Earth. This is because of the monstrously complex idiosyncrasies of Coordinated Universal Time (UTC).

UTC tries to do two things simultaneously: use caesium seconds, and make the Sun's zenith always occur at 12:00. These two things are fundamentally incompatible, so UTC requires lots and lots of special rules, edge case handling, and adjustment via committee that make it a nightmare for everyone.

![A comic where someone says 'Event 1 happened at time T_1. Event 2 happened at time T_2. How would you calculate how much time elapsed between T_1 and T_2?'. The comic splits into two possible responses, one from a normal person who replies 'T_2 minus T_1' and one from a datetime engineer who replies 'It is impossible to know and a sin to ask!'](/media/xkcd_2867.webp "xkcd.com/2867")

#### Leap Seconds

To solve the desynchronization problem, UTC just lets the errors build up until they amount to one caesium second's worth, and then they announce a leap second to bring the difference back down. UTC gives 6 months of warning before each leap second, and then leaves the implementation of that leap second as an exercise to datetime programmers around the world.

Because datetime programmers can't agree on how best to handle leap seconds, different systems handle them slightly differently. Some systems display an extra second at "23:59:60", some display "23:59:59" for two whole seconds, some "smear" the leap second throughout the day, and some just blank out entirely during the leap second. Some systems ignore leap seconds completely because they've decided that the errors are insignificant enough that they aren't worth handling properly.

Almost everybody hates leap seconds, [including Google, Amazon, and Meta](https://www.zdnet.com/home-and-office/networking/tech-giants-want-to-put-an-end-to-leap-seconds/). Even BIPM (the organization responsible for UTC) is trying to make leap seconds less frequent as part of [Resolution 4](https://www.bipm.org/en/-/resolution-cgpm-27-4).

Oh, and also it's possible that UTC will add a [negative leap second](https://qntm.org/leap) at some point in the near future, so that's fun.

Leap seconds are a confusing, inconsistent mess that should be abolished.

#### Time Zones

![Map of current de facto time zones ](/media/timezones.webp "Time zones of the world")

The image above is a map of UTC's time zones. Each zone represents a different offset from UTC (which is "zeroed" on the Greenwich Royal Observatory in England). Without time zones, noon would occur at different times throughout the world, which would violate UTC's goals. So it offsets the time to try to make noon occur as close to 12:00 as possible all around the world.

Ideally, time zones would be parallel rectangular ribbons. But in reality, they contour to geographical and geopolitical borders for political reasons, which results in the wacky and uneven zones that you see above.

Most time zones are offset from UTC by a positive or negative whole number of hours, but even this broad statement has a few asterisks. Examples include Indian Standard Time being 5 hours and 30 minutes offset and Nepal Standard Time being 5 hours and 45 minutes offset.

Because of time zones, "2:00" could mean _literally_ any hour depending on where you are relative to where it was said.

Time zones are a confusing, inconsistent mess that should be abolished.

#### Daylight Saving Time

To make UTC's time zones even worse, sometimes the offset changes by an additional hour for daylight saving time (DST).

In addition to intentionally creating inconsistencies depending on the time of year, DST also adds even more inconsistencies depending on location. Within a single time zone, some countries respect DST while others don't. Within countries that are split across multiple time zones (like the U.S.), some regions respect it and others don't. There's no rhyme or reason to this, so you just have to keep a list of regions that do and don't use DST. Because of DST, knowing _where_ a clock is isn't enough to calculate its UTC offset; you also need to consider what time of year it is.

Beyond being a hassle for datetime programmers, DST also has a massive quantifiable cost in both money and human lives. Every year, the lost productivity of people re-adjusting their sleep schedules [costs about $275 million](https://en.wikipedia.org/wiki/Daylight_saving_time#Effects_on_health), and the sleep deprivation [causes about 30 deaths](https://doi.org/10.1257%2Fapp.20140100) from heart attacks, strokes, and sleepiness-induced fatal car crashes.

DST is an expensive, lethal, confusing, and inconsistent mess that should be abolished.

### Seconds are a bad unit of time

As much as I pick on UTC, it accomplishes its stated goals admirably. It successfully manages the impossible task of reconciling caesium seconds with natural seconds.

But it shouldn't have to.

Absolute time and relative time are fundamentally different things. Both are necessary, but they are simply not compatible. Without absolute time, it would be impossible to describe things precisely or to coordinate consistently across the globe. Without relative time, it would be impossible to describe the day/night cycle consistently and people would go insane from sleep deprivation as their circiadian rhythms drifted out of sync. However, it simply doesn't make sense to use the same time unit for both absolute and relative time. They are different and should have different units with different names that are substantially different in value so that people don't conflate them.

Using a natural second when you meant to use a caesium second is objectively wrong and results in inconsistent behavior that causes real problems down the line. Had you accidentally used an hour instead of a second, you would instantly notice your mistake because the output would be immediately wrong by a factor of nearly four thousand. But because mixing up seconds is only wrong by two millionths of a percent, it's very difficult to catch these kinds of mistakes until the errors have compounded over years.

The only reason that seconds continue to be universally used is cultural inertia, and seconds have a **lot** of cultural inertia. With the possible exception of base-10 mathematics, I can't think of any other system that is more deeply rooted into modern human civilization. _Everything_ depends on the second.

Every server on the internet uses UTC timekeeping, every textbook and novel uses seconds to describe elapsed time, and every clock has a separate hand for hours, minutes, and seconds.

The second unites languages and cultures and measurement systems. Both metric and customary are defined in terms of seconds, which means that almost every manmade physical object manufactured in the last 200 years was built to a specification that used measurements that are based on the caesium second. All across the world, every road sign, milk jug, screw, skyscraper, and everything else relies on seconds.

Even if we had a better time unit, retrofitting _all technology_ to the new standard would be an undertaking of such incomprehensible scale that it would make the Apollo Program look like a weekend Lego set.

There is no escape from the second, and there never will be.

## The Marks System

...but what if there was?

I have an idea for a measurement and timekeeping system that uses neither caesium seconds nor natural seconds.

I call it the **Marks system**. It's an eponym based on my last name, but I think that it sounds fittingly generic for a measurement system.

### Disclaimer/Foreword

Firstly, even though I believe that the Marks system is genuinely better than our current second-based systems, I'm realistic about my system's chances of being adopted. This is not a naive, pie-in-the-sky manifesto, and I realize how difficult it would be to adopt my system in practice. However, please try to suspend your disbelief about implementation feasibility.

Secondly, the terms and magnitudes that I use are just suggestions. The Marks system is more of a concept than an actual specification. The terms have plenty of wiggle room and are not set in stone; I changed my mind about a few of them in the process of writing this post. So if you object to something about the Marks system, please try to distinguish whether you're objecting to the core concepts or just the naming conventions.

### Planck Units

> Planck units are the master units of reality. They're not defined by silly human measurements, they're made of other constants. If there is a God, He's probably using these to boil His tea and put up His shelves.
>
> -- [Alexander McKechnie](https://youtu.be/EH-z9gE2uGY?t=147) (@exurb1a)

Almost all measurement systems are based off of human convenience. For example, caesium seconds are based on the properties of caesium-133. Scientists could have chosen to base the second off of any other atom's hyperfine transition frequency (although caesium-133 is cheap and very stable, which makes it convenient, which is why they chose it), so they choice of caesium-133 was arbitrary.

The exceptions to this are Planck units. Planck units are units that are defined exclusively using the fundamental universal properties of pure vacuum. These properties include the speed of light, the gravitational constant, and the Planck constant.

For example, to derive the Planck unit for time (which is called "Planck time"), all you have to do is multiply the reduced Planck constant by the gravitational constant, divide them by the speed of light raised to the fifth power, and then take the square root of the whole thing. This formula might sound arbitrary, but it isn't. This formula is the _only_ way to derive a unit of time from the properties of vacuum. If you asked someone who didn't know about Planck units to invent a unit of time using only the properties of vacuum, they would (eventually) independently arrive at this same formula. The Planck units are unique, non-arbitrary, and fundamental, which is what make them special.

The problem with the Planck units is that, because they aren't based on human convenience, they are pretty inconvenient. Shocking, I know.

For example, the Planck time is very, very, very, very small. When you express one Earth day in Planck times, you get [approximately](https://www.wolframalpha.com/input?i=N%5Bmean+solar+day+in+planck+time%2C+6%5D) `1.6026x10^48`. In word form, that's over 1.6 million million billion billion billion billion Planck times. Obviously, this is an absurdly large and completely impractical number, which is why nobody uses Planck units.

The goal of the Marks system is to add a _tiny_ bit of arbitrariness to make Planck units as convenient as the metric or customary systems.

### Marks Prefixes

One of the best parts about the metric system is the [SI prefixes](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes). Rather than inventing entirely new words and ratios for each unit like the customary system does, the metric system uses power-of-ten prefixes to convert between its units. For example, because "kilo" means "1000", a **kilo**meter is exactly 1000 meters.

SI prefixes are very elegant and very coherent, and in my opinion they are far superior to the customary system's seemingly random conversion ratios such as "1 mile equals exactly 5280 feet" and "1 ounce equals exactly 437.5 grains".

However, there aren't SI prefixes for every magnitude, most notably for 10,000 and 100,000. This might not seem important, but the Marks system really needs prefixes for these magnitudes in order to make convenient scales.

So I decided to extend the SI prefixes for a few important magnitudes that the official SI prefix specification omits.

When possible, I used existing unofficial SI prefixes, but a few magnitudes didn't have _any_ proposed prefixes so I had to make up my own. I took inspiration from the numeral systems of other cultures because they often have succinct, cool-sounding words for numbers.

Remember that these terms are just suggestions and are not set in stone. The table below is ordered from most to least important, not by scale.

<!-- prettier-ignore -->
| Magnitude | Prefix | Reasoning |
| --- | --- | --- |
| `10^4` | Myria | A pre-existing prefix: <https://en.wikipedia.org/wiki/Myria-> |
| `10^5` | Lakh- | Derived from [Lakh](https://en.wikipedia.org/wiki/Lakh), the Indian numbering system word for 100,000  |
| `10^7` | Hebdo- | A pre-existing prefix: <https://en.wikipedia.org/wiki/Hebdo-> | 
| `10^-44` | Tetrakon- | Derived from the Greek word "[tetrakontatessera](https://translate.google.com/?sl=el&tl=en&text=tetrakontatessera&op=translate)", meaning "forty-four", because it's ten to the minus forty-four |
| `10^-34` | Triantessera- | Derived from the Greek phrase "[triantatessera](https://translate.google.com/?sl=el&tl=en&text=triantatessera&op=translate)", meaning "thirty-four", because it's ten to the minus thirty-four |
| `10^-8` | Ogdo- | Derived from the Greek word "[ogdoos](https://translate.google.com/?sl=el&tl=en&text=ogdoos&op=translate)", meaining "eighth", because it's ten to the minus eight |
| `10^10` | Rahng- | Derived from the romanized form of the Pinyin pronunciation of [穰](https://en.wikipedia.org/wiki/Chinese_numerals#Large_numbers:~:text=%E7%A9%B0), the Chinese short scale numeral for `10^10` |

## Tim

![A famous scene from the film 'Monty Python and the Holy Grail' depicting an enchanter wearing mountain sheep horns with the text 'There are some who call me Tim'](/media/somewhocallmetim.webp)

The **tim** is the fundamental unit of time for the Marks system. It's pronounced `/tɪm/` (exactly like how it looks).

### Etymology

Tims get their name from the first three letters of the word "**tim**e". This is a convention of my suggested terms for the Marks system.

### Definition

1 tim is defined as exactly `10^44` Planck times. This is [approximately](https://www.wolframalpha.com/input?i=10%5E44+planck+times) 5.391 caesium seconds.

### Multiples

Combining tims with prefixes, you get a variety of supermultiples and submultiples to efficiently describe different time scales. The table below lists a few of the most useful ones.

| Unit        | Tims               | Equivalent        |
| ----------- | ------------------ | ----------------- |
| Tetrakontim | `10^-44` tims      | 1 Planck time     |
| Millitim    | 0.001 tims         | 5.39 milliseconds |
| Decitim     | 0.1 tims           | 0.54 seconds      |
| Tim         | 1 tim              | 5.39 seconds      |
| Decatim     | 10 tims            | 0.89 minutes      |
| Hectotim    | 100 tims           | 8.98 minutes      |
| Kilotim     | 1,000 tims         | 1.49 hours        |
| Myriatim    | 10,000 tims        | 0.62 days         |
| Lakhtim     | 100,000 tims       | 0.81 weeks        |
| Megatim     | 1,000,000 tims     | 2.05 months       |
| Hebdotim    | 10,000,000 tims    | 1.71 years        |
| Gigatim     | 1,000,000,000 tims | 1.71 centuries    |

### Conversions

Here are a few common second-based time units expressed in multiples of tims. They don't map very evenly, which is intentional. More on that later.

| Unit     | Tims            |
| -------- | --------------- |
| 1 second | 0.185 tims      |
| 1 minute | 1.113 decatims  |
| 1 hour   | 0.667 kilotims  |
| 1 day    | 1.603 myriatims |
| 1 week   | 1.122 lakhtims  |
| 1 month  | 0.488 megatims  |
| 1 year   | 0.585 hebdotims |

### Examples

Here are a few common everyday durations expressed in tims.

| Duration               | Tims                          |
| ---------------------- | ----------------------------- |
| Human eye blink        | 65 millitims                  |
| Hummingbird wing beat  | 3 millitims                   |
| Time to cook an egg    | 39 tims                       |
| Average pop song       | 36 tims                       |
| Average urban commute  | 3.3 hectotims (336 tims)      |
| REM sleep cycle        | 2.7 hectotims (278 tims)      |
| Earth day              | 1.6 myriatims (16,030 tims)   |
| Moon orbit             | 4.37 lakhtims                 |
| Average human lifespan | 42 hebdotims                  |
| Age of great pyramid   | 26 gigatims (2,600 hebdotims) |

### Why 10^44?

I chose to define 1 tim at exactly `10^44` Planck times because it results in a convenient human-scale amount of time. This was just an arbitrary choice on my part; `10^43` would also work. However, I think that `10^44` strikes a good balance between being too short and too long and it results in convenient multiples.

### Are tims too long?

Tims are considerably longer than seconds. Rather than being 1 second long (approximately the frequency of a human heartbeat), a tim is over 5 seconds long. This is a massive departure from the fundamental time unit that everyone is used too. To count by tims, you'd say "one", wait for what feels like ages, and then get to say "two". I know that this seems alien and foreign and inconvenient.

However, it's important to distinguish between cultural inertia and fundamental inconvenience. I believe that the reason that tims seem "wrong" is primarily inertia, which is a matter of implementation feasibility, which we agreed to suspend disbelief about. Imagine that we can magically just instantly make everyone acclimated to tims.

In this scenario, I think that tims would be feel like a natural, convenient scale. This wouldn't work if I set a tim equal to like 50 seconds or something; that would always be inconvenient no matter how used to it people are. But I think that tims are within the range of human adaptability.

And if you need a less coarse unit of time than the tim, the decitim is quite convenient. It's even more precise than the second without being overly precise like the millisecond.

And besides, you'll see later why the fact that tims are different from seconds by such a huge amount is actually one of the greatest strengths of the Marks system.

### Doesn't this conflict with the name "Tim"?

That's actually the **second** time I've heard that objection. It's actually a pretty **minute** point when you compare it to how much semantic overlap second-based units have.

## Len

![A statue of Vladimir Lenin with the text 'There are some who call me Len'](/media/somewhocallmelen.webp)

The **len** is the fundamental unit of length for the Marks system. It's pronounced `/lɛn/` (exactly like how it looks).

### Etymology

Lens get their name from the first three letters of the word "**len**gth".

### Definition

1 len is defined as exactly `10^34` Planck lengths. This is [approximately](https://www.wolframalpha.com/input?i=10%5E34+planck+lengths) 16.163 centimeters, or 6.36 inches.

### Multiples

Combining lens with prefixes, you get a variety of supermultiples and submultiples to efficiently describe different distance scales. The table below lists a few of the most useful ones.

| Unit            | Lens           | Equivalents(s)               |
| --------------- | -------------- | ---------------------------- |
| Triantesseralen | `10^-34` lens  | 1 Planck length              |
| Millilen        | 0.001 lens     | 0.161 millimeters            |
| Decilen         | 0.1 lens       | 1.6 centimeters (0.6 inches) |
| Len             | 1 len          | 16 centimeters (6.3 inches)  |
| Decalen         | 10 lens        | 1.6 meters (5.3 feet)        |
| Hectolen        | 100 lens       | 16 meters (53 feet)          |
| Kilolen         | 1,000 lens     | 161 meters (530 feet)        |
| Myrialen        | 10,000 lens    | 1.6 kilometers (1.00 miles)  |
| Lahklen         | 100,000 lens   | 16 kilometers (10 miles)     |
| Megalen         | 1,000,000 lens | 161 kilometers               |

Note that 1 myrialen happens to be very similar in length to 1 customary mile.

### Examples

Here are a few common lengths expressed in lens. It's a stylistic choice whether to primarily use len and myrialen or to use some of the more specific len multiples.

| Length                | Lens                          |
| --------------------- | ----------------------------- |
| Width of a human hair | 464 microlens                 |
| Grain of table salt   | 1.8 millilens                 |
| Paperclip             | 2 decilens                    |
| Chicken egg           | 3.5 decilens                  |
| Banana                | 1.2 lens                      |
| Bowling pin           | 2.3 lens                      |
| Electric guitar       | 6 lens                        |
| Average human height  | 1 decalen (10 lens)           |
| African elephant      | 4 decalens (40 lens)          |
| Blue whale            | 1.5 hectolens (150 lens)      |
| Brooklyn bridge       | 3 kilolens (3,000 lens)       |
| Grand canyon          | 2.7 megalens (270 myrialens)  |
| Australia             | 24 megalens (2,400 myrialens) |

### Why 10^34?

I chose to define 1 len at exactly `10^34` Planck lengths because it results in a convenient human-scale length. Again, this was an arbitrary choice on my part, and there are other values that would have worked.

## Maz

![An image of Maz Kanata from Star Wars with the text 'There are some who call me Maz'](/media/somewhocallmemaz.webp)

The **maz** is the fundamental unit of mass for the Marks system. It's pronounced `/mɑːz/` (with a long 'a' like in "car").

### Etymology

Maz gets its name from "mass", but it's pronounced and spelled differently in order to make it distinct.

Had I named it "mas" to follow the truncation convention set by tims and lens, it would be impossible to tell "mass" and "mas" apart when spoken aloud. By backing the "a" and voicing the "s" (turning it into a "z"), the unit (maz) is phonetically and orthographically distinct from the dimensionality (mass).

Notably, unlike tims and lens which follow normal English pluralization rules, maz use the same word for both the singular and plural form: "maz". I did this because the normal English plural form of "maz" is "mazes", which is multisyllabic and is also a homograph for the plural form of "maze" (like a hedge maze).

### Definition

1 maz is defined as exactly `10^8` Planck masses. This is [approximately](https://www.wolframalpha.com/input?i=10%5E8+planck+masses) 2.176 kilograms, or 4.798 pounds.

### Multiples

Combining maz with prefixes, you get a variety of supermultiples and submultiples to efficiently describe different mass scales. The table below lists a few of the most useful ones.

| Unit     | Maz          | Equivalents(s)               |
| -------- | ------------ | ---------------------------- |
| Picomaz  | `10^-12` maz | 2 nanograms                  |
| Nanomaz  | `10^-9` maz  | 2 micrograms                 |
| Ogdomaz  | `10^-8` maz  | 1 Planck mass                |
| Micromaz | `10^-6` maz  | 2 milligrams                 |
| Millimaz | 0.001 maz    | 2 grams                      |
| Decimaz  | 0.1 maz      | 217 grams (0.5 pounds)       |
| Maz      | 1 maz        | 2.2 kilograms (4.8 pounds)   |
| Decamaz  | 10 maz       | 22 kilograms (48 pounds)     |
| Hectomaz | 100 maz      | 218 kilograms (480 pounds)   |
| Kilomaz  | 1,000 maz    | 2176 kilograms (4798 pounds) |

Note that, because 1 Planck mass is actually a surprisingly human-scale, the ogdomaz is not the smallest common multiple.

### Examples

Here are the masses of a few common objects expressed in maz.

| Object                                  | Maz                     |
| --------------------------------------- | ----------------------- |
| Mosquito                                | 27 nanomaz              |
| Paperclip                               | 0.5 millimaz            |
| US penny                                | 1.1 millimaz            |
| Banana                                  | 54 millimaz             |
| Basketball                              | 287 millimaz            |
| Macbook Air                             | 0.57 maz                |
| Clay brick                              | 0.9 maz                 |
| Global average adult human (70kg/154lb) | 32 maz                  |
| Giant panda                             | 58 maz                  |
| Upright piano                           | 102 maz                 |
| Bluefin tuna                            | 206 maz                 |
| Compact car                             | 386 maz                 |
| TEU shipping container                  | 1 kilomaz (1,048 maz)   |
| American school bus                     | 2.7 kilomaz (2,709 maz) |

### Why 10^8?

I chose to define 1 maz at exactly `10^8` Planck masses because it results in a convenient human-scale mass. As usual, this was an arbitrary choice on my part, and there are other values that would have worked.

One reason that I chose `10^8` is that people are vain. For example, the reason that [British imperial stone](<https://en.wikipedia.org/wiki/Stone_(unit)>) are still used is because they make the majority of human body weights fall between 6-25 stone. In customary pounds, this same range is 84-350 pounds. People prefer using measurement systems that make body weights have smaller numbers. Regardless of your opinion on this practice, it seems reasonable to meet people where they are.

## Derived Units

Now that we have Marks units for the Big Three fundamental dimensionalities (time, length, and mass), we can combine them to create Marks units for the derived dimensionalities.

The Marks system uses metric-style 1:1 dimensionality combining. In other words, because "velocity" equals "length divided by time", 1 of our unit of velocity is exactly equal to 1 of our unit of length divided by 1 of our unit of time.

To prevent this post from being 10,000 words long, I'm going to put a bunch of them in a table rather than giving each their own section. Each of their multiples follow the same convention as the other Marks units.

| Unit | Dimensionality   | Definition    | Pronounciation | si Equivalent |
| ---- | ---------------- | ------------- | -------------- | ------------- |
| Vel  | **Vel**ocity     | `len / tim`   | `/vɛl/`        | `0.029 m/s`   |
| Ler  | Acce**ler**ation | `len / tim^2` | `/lɚ/`         | `0.005 m/s^2` |
| Vol  | **Vol**ume       | `len^3`       | `/vɑl/`        | `0.004 m^3`   |
| Ary  | **Are**a         | `len^2`       | `/ɛri/ `       | `0.025 m^2`   |
| Pul  | Force            | `maz * ler`   | `/pʊl/`        | `0.01 N`      |
| Tum  | Momen**tum**     | `maz * vel`   | `/tʌm/`        | `0.07 kg m/s` |

### Notes

1 rahngvel (`10^10` vel) is exactly equal to the speed of light. This is a convenient non-coincidence (it's a property of the Planck units) that is much more memorable than "`2.998x10^8` meters per second".

My suggested pronounciation for ler is `/lɚ/`. This is the natural pronounciation for most American English speakers (including me) that aligns with how we pronounce "acce**ler**ation", but it contains a [rhotic schwa](https://en.wikipedia.org/wiki/R-colored_vowel), which can be difficult to pronounce if you speak almost any language/dialect other than American English or Mandarin Chinese. If you're part of the 80% of humanity that doesn't use rhotic schwas, I suggest pronouncing ler as `/lɛr/` (rhymes with air).

The reason that ary ends in "y" instead of "e" is because that would conflict orthographically with "are" (the extremely common verb) and make its pronounciation less obvious.

The reason that pul isn't named "for" (truncated from "**for**ce") is because that would conflict orthographically with "for" (the extremely common English preposition) and conflict phonetically with "4" (the number). Instead, I named the force unit after the word "pull" (a generic type of force). It's not perfect, but it was better than the alternatives.

### Vernacular Multiples

Some of these derived units are inconveniently small. For example, 1 vel is glacially slow: [approximately](https://www.wolframalpha.com/input?i=10%5E34+planck+lengths%2F+%2810%5E44+planck+times%29+in+mph) 0.067 miles per hour.

In cases like these, a convenient supermultiple should be used in common vernacular instead of the base unit, similar to how kilograms are used for most measurements instead of using grams directly. For example, rather than saying "cheetahs can run at 968 vel", you would say "cheetahs can run at 9.7 hectovel".

Of course, it would be great if the base units were human-scale, but they don't naturally work out that way and it's not worth losing the ease of 1:1 dimensionality conversions by using arbitrary conversion ratios.

Note that almost all vernacular multiples have either the same amount of syllables or less compared to their metric or customary counterparts; "hectovel" is three syllables, which is the same as "miles per hour" and shorter than both "meters per second" and "kilometers per hour".
