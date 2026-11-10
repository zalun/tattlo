# tattlo

A feedback button for web apps. The user writes what is wrong, and tattlo sends it
on with the context a developer would otherwise have to ask for: the screen, the
record on it, the app version, the device and, if the user agrees, a screenshot with
sensitive fields blurred. tattlo opens a GitHub issue with the report, and the
person who sent it can check later whether someone fixed it.

**Status:** an empty scaffold. Nothing here works yet, and the API below is a plan.

## Planned entry points

| Import | Runs in | Does |
| --- | --- | --- |
| `tattlo/widget` | browser | A web component (`<tattlo-feedback>`) for React, Next.js, Astro or plain HTML. It collects the report and context and holds no credentials. |
| `tattlo/server` | Lambda, Next.js route, Cloudflare Worker | A `Request → Response` handler built on Web APIs only. It identifies the user, validates the report, removes card numbers and passes the report to the sinks. |
| `tattlo/github` | server | Sink that opens an issue and reads issue status back for the "my reports" view. |
| `tattlo/sheets` | server | Sink that appends a row to a Google Sheet. |
| `tattlo/s3` | server | Screenshot storage on S3 or R2. The GitHub API cannot attach files to issues, so the issue links to the screenshot instead. |
| `tattlo/identity/cloudflare-access` | server | Reads the signed-in user from Cloudflare Access. |

## Why "tattlo"

The name comes from the Fourth Draft, a religion invented for this library. No such
faith or myth exists. The closest real figure is Momus, the Greek god of criticism,
thrown out of Olympus for finding fault with everything.

Followers of the Fourth Draft believe the Makers have made the world four times.
They threw away the first three attempts and kept the fourth, but went up to their
workshop before they finished it. Down below, mortals trip over what they left half
done: crooked doorsteps, doors that open the wrong way, buttons that do nothing. The
Makers mean well, but from their workshop they cannot see what hurts below.

So they made Tattlo, a small, unloved god and the only one who walks between the
world and the workshop. He sits in the corner of every room and waits. When someone
swears under their breath, he takes the complaint and everything around it: where it
happened, what the person was holding, the hour, how the world looked at that
moment. He climbs to the workshop and puts it on the Makers' table. He carries it
word for word, and he blurs the faces of passers-by who happened to be in the
picture. When the doorstep is fixed, he walks back down and tells the one who
complained.

Without that walk back, people would stop complaining, so the status view belongs
to the first version of the library.

| In the myth | In the library |
| --- | --- |
| The corner where Tattlo waits | the widget |
| What he carries with the complaint | context and screenshot |
| Blurred passers-by | masked sensitive fields, removed card numbers |
| The Makers' table | the GitHub issue |
| The walk back down | the "my reports" status view |

## Development

Requires Node 20+, pnpm and [just](https://github.com/casey/just).

```bash
pnpm install
just check   # Biome, then tsc
just test    # Vitest, then a build of every entry point
```

## License

MIT, see [LICENSE](LICENSE).
