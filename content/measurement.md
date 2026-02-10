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

Both the SI (metric) system and the customary (U.S.) system define *all* of their units in terms of the second, one way or another. The SI meter is defined as "the distance that light travels in a vacuum during 1/299,792,458 of a second". If you didn't know how long a "second" is, you also wouldn't know how long a meter is, so the definition of a meter relies on the definition of a second. 

Even units that aren't directly defined via seconds can still be reliant on it. For example, the customary foot is defined as *exactly* 0.3048 meters, so because it's based on meters and meters are based on seconds, the customary foot is ultimately based on seconds. Likewise, because the SI kilogram is defined in terms of the speed of light, the Planck constant, and the SI meter, it too is based on seconds. The customary pound is defined as exactly 0.45359237 kilograms, so it relies on kilograms which rely on meters which rely on seconds. *Every* unit ultimately relies on the second. Because of this, it's absolutely critical that we know **exactly** how long a second is.

The natural second is not good enough for this. The natural second is defined in terms of the length of the day, and the length of the day changes a tiny, tiny amount every day (mainly due to the Moon's gravitational pull gradually slowing Earth's rotation over the course of millions of years). Because of this, the definition of a natural second is ever so slightly different every day. This is obviously unacceptable; nobody wants to update yardsticks because the definition of a foot changed.

So scientists decided to use a unit of time that doesn't ever change: the ground-state hyperfine transition of a caesium-133 atom. That's a lot of jargon, but all you need to know is that it's a very specific duration of time that is extremely stable and can be reproducibly measured using laboratory equipment. The only problem is that it's very, very, very small: approximately 9 billion times smaller than a natural second. So the solution was to define "second" to mean "the ground-state hyperfine transition of a caesium-133 atom multiplied by exactly 9,192,631,770". This definition also has several names, including "SI second", "atomic second", and "proper second". I'm going to call it the "caesium second".

### The difference

A caesium second is approximately equal to a natural second, but it's not *exact*. The percent difference is usually [around](https://www.wolframalpha.com/input?i=%28%28mean+solar+day+%2F+86400%29+-+SI+second%29+%2F+%28%28%28mean+solar+day+%2F+86400%29+%2B+SI+second%29+%2F+2%29) 0.000002%, which is so small that the two seconds are often considered "close enough", the subtle differences between them are ignored, and the two are used interchangeably, despite being fundamentally different. More on that later.

Anyways, if we define a "second" to mean a caesium second, the answer to "How many seconds are in a day?" is [approximately](https://www.wolframalpha.com/input?i=SI+seconds+in+a+mean+solar+day) 86,400.002.

## Why it matters

This might sound like pedantic hair-splitting. And okay, it kind of is. But the difference between caesium seconds and natural seconds does have real consequences.

Almost every internet-connected time display (including your phone/laptop/whatever) uses caesium seconds. The second hand on a smartwatch ticks forward every caesium second, *not* every natural second. This means that 86,400 ticks of a smartwatch is *slightly* less than the time it takes for Earth to complete a full rotation. Over a long enough time period, these errors compound, and your clock will drift out of sync with the Earth. As of 2026, the errors [should amount to](https://www.nist.gov/pml/time-and-frequency-division/time-realization/leap-seconds#leap-seconds-inserted-into-the-utc-time-scale) 27 (caesium) seconds of difference over the past 54 years.

And yet, your smartphone stays almost perfectly in sync with the Earth. This is because of the monstrously complex idiosyncrasies of Coordinated Universal Time (UTC).

UTC tries to do two things simultaneously: use caesium seconds, and make the Sun's zenith always occur at 12:00. These two things are fundamentally incompatible, so UTC requires lots and lots of special rules, edge case handling, and adjustment via committee that make it a nightmare for everyone.

![A comic where someone says 'Event 1 happened at time T_1. Event 2 happened at time T_2. How would you calculate how much time elapsed between T_1 and T_2?'. The comic splits into two possible responses, one from a normal person who replies 'T_2 minus T_1' and one from a datetime engineer who replies 'It is impossible to know and a sin to ask!'](/media/xkcd_2867.webp "xkcd.com/2867")

### Leap Seconds

To solve the desynchronization problem, UTC just lets the errors build up until they amount to one caesium second's worth, and then they announce a leap second to bring the difference back down. UTC gives 6 months of warning before each leap second, and then leaves the implementation of that leap second as an exercise to datetime programmers around the world. 

Because datetime programmers can't agree on how best to handle leap seconds, different systems handle them slightly differently. Some systems display an extra second at "23:59:60", some display "23:59:59" for two whole seconds, some "smear" the leap second throughout the day, and some just blank out entirely during the leap second. Some systems ignore leap seconds completely because they've decided that the errors are insignificant enough that they aren't worth handling properly.

Almost everybody hates leap seconds, [including Google, Amazon, and Meta](https://www.zdnet.com/home-and-office/networking/tech-giants-want-to-put-an-end-to-leap-seconds/). Even BIPM (the organization responsible for UTC) is trying to make leap seconds less frequent as part of [Resolution 4](https://www.bipm.org/en/-/resolution-cgpm-27-4).

Oh, and also it's possible that UTC will add a [negative leap second](https://qntm.org/leap) at some point in the near future, so that's fun.

Leap seconds are a confusing, inconsistent mess that should be abolished.

### Time Zones

![Map of current de facto time zones ](/media/timezones.webp "Time zones of the world")

The image above is a map of UTC's time zones. Each zone represents a different offset from UTC (which is "zeroed" on the Greenwich Royal Observatory in England). Without time zones, noon would occur at different times throughout the world, which would violate UTC's goals. So it offsets the time to try to make noon occur as close to 12:00 as possible all around the world.

Ideally, time zones would be parallel rectangular ribbons. But in reality, they contour to geographical and geopolitical borders for political reasons, which results in the wacky and uneven zones that you see above.

Most time zones are offset from UTC by a positive or negative whole number of hours, but even this broad statement has a few asterisks. Examples include Indian Standard Time being 5 hours and 30 minutes offset and Nepal Standard Time being 5 hours and 45 minutes offset.

Because of time zones, "2:00" could mean *literally* any hour depending on where you are relative to where it was said. 

Time zones are a confusing, inconsistent mess that should be abolished.

### Daylight Saving Time

To make UTC's time zones even worse, sometimes the offset changes by an additional hour for daylight saving time (DST). 

In addition to intentionally creating inconsistencies depending on the time of year, DST also adds even more inconsistencies depending on location. Within a single time zone, some countries respect DST while others don't. Within countries that are split across multiple time zones (like the U.S.), some regions respect it and others don't. There's no rhyme or reason to this, so you just have to keep a list of regions that do and don't use DST. Because of DST, knowing *where* a clock is isn't enough to calculate its UTC offset; you also need to consider what time of year it is.

Beyond being a hassle for datetime programmers, DST also has a massive quantifiable cost in both money and human lives. Every year, the lost productivity of people re-adjusting their sleep schedules [costs about $275 million](https://en.wikipedia.org/wiki/Daylight_saving_time#Effects_on_health), and the sleep deprivation [causes about 30 deaths](https://doi.org/10.1257%2Fapp.20140100) from heart attacks, strokes, and sleepiness-induced fatal car crashes.

DST is an expensive, lethal, confusing, and inconsistent mess that should be abolished.

## Seconds are a bad unit of time

As much as I pick on UTC, it accomplishes its stated goals admirably. It successfully manages the impossible task of reconciling caesium seconds with natural seconds.

But it shouldn't have to.

Absolute time and relative time are fundamentally different things. Both are necessary, but they are simply not compatible. Without absolute time, it would be impossible to describe things precisely or to coordinate consistently across the globe. Without relative time, it would be impossible to describe the day/night cycle consistently and people would go insane from sleep deprivation as their circiadian rhythms drifted out of sync. However, it simply doesn't make sense to use the same time unit for both absolute and relative time. They are different and should have different units with different names that are substantially different in value so that people don't conflate them.

Using a natural second when you meant to use a caesium second is objectively wrong and results in inconsistent behavior that causes real problems down the line. Had you accidentally used an hour instead of a second, you would instantly notice your mistake because the output would be immediately wrong by a factor of nearly four thousand. But because mixing up seconds is only wrong by one millionth of a percent, it's very difficult to catch these kinds of mistakes until the errors have compounded over years.

The only reason that seconds continue to be universally used is cultural inertia, and seconds have a **lot** of cultural inertia. With the possible exception of base-10 mathematics, I can't think of any other system that is more deeply rooted into modern human civilization. *Everything* depends on the second.

Every server on the internet uses UTC timekeeping, every textbook and novel uses seconds to describe elapsed time, and every clock has a separate hand for hours, minutes, and seconds.

The second unites languages and cultures and measurement systems. Both metric and customary are defined in terms of seconds, which means that almost every manmade physical object manufactured in the last 200 years was built to a specification that used measurements that are based on the caesium second. All across the world, every road sign, milk jug, screw, skyscraper, and everything else relies on seconds.

Even if we had a better time unit, retrofitting *all technology* to the new standard would be an undertaking of such incomprehensible scale that it would make the Apollo Program look like a weekend Lego set.

There is no escape from the second, and there never will be.

## Except...
