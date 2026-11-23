# Monday 23 November 2026: 42 stories, 7 regions — number-led evidence cards

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/zesty-pika-87/news-image-20261123-v2-entry/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/zesty-pika-87/news-image-20261123-v2-entry/reward.svg)](https://make.fun/bounty/news-image-20261123)

An entry for the [news-image-20261123 bounty](https://make.fun/bounty/news-image-20261123):
sum up the world's news of Monday 23 November 2026 in one image.

## The idea

**Number-led evidence cards + field-grouped front page.** Round 1 showed that
the dense-newspaper template has become a commodity across 7,226 entries, so
this version competes on visible evidence instead of on the frame: every one
of the 13 featured illustrations is built around one giant sourced number
(193 UN member states, 20+ drone boats stopped, 104 World Cup matches,
264 kg of explosives seized, 14 missing, 9 shot, 25,000 new entrepreneurs)
with the scene drawn around it. The middle grid is grouped by field
(Conflict, Climate, Markets, Culture, Politics, Disaster, Crime), each story
carries one deck line and one source line, the numbers band is light cream,
and the date check is a single quiet line.

## The front page

- Masthead: the date in giant serif, no newspaper name — **Monday 23 November 2026**
- 42 stories, 7 regions, 12 fields — every one from this Monday
- 3 heroes: Bahrain takes Iran to the UN · UN demands inquiry as a warship
  sinks off Libya · FIFA confirms the UK as host of the 2035 Women's Cup
- 10 middle stories, each an evidence card with its key number
- World map with numbered pins + a numbered index of all 42 stories
- Date check: all 42 stories are from Monday, 23 November 2026

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024, PNG)
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. The image was drawn for this entry with PIL from the
day's reporting; run it twice and the bytes are identical.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/?ref=1aaz13gb) — enter the bounty yourself:
https://make.fun/?ref=1aaz13gb
