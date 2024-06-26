import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use to make Magic."
      intro="I get asked a lot about the things I use to build software, stay productive. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M1 Pro Chip, 64GB RAM (2021), 1 Terabyte ">
            I was using an Intel-based 13” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Samsung 28 UR550 4K (UHD) Monitor">
            This UHD monitor delivers stunning images composed of 8 million
            pixels for even more intricate detail. Experience unparalleled
            realism when gaming or enjoying movies
          </Tool>
          <Tool title="Keychron K3 Keyboard">
            The innovative low profile switch is up to 40% slimmer rather than
            conventional switch while still offering exceptional tactile
            response of mechanical keyboards.
          </Tool>
          <Tool title="MX MASTER 3S">
            Introducing Quiet Clicks – create, make and do with the same click
            feel, but less noise. Quiet Clicks deliver satisfying, soft tactile
            feedback with 90% less click noise14Compared to MX Master 3, MX
            Master 3S has 90% less Sound Power Level left and right click,
            measured at 1m.
          </Tool>
          {/* <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool> */}
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS code">
            I made a switch to it in 2017, I never looked back since. it been
            powerful and works for me everytime
          </Tool>
          <Tool title="iTerm2">
            {''}
            {/* I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use. */}
          </Tool>
          <Tool title="TablePlus">
            {''}
            {/* Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years. */}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            {/* We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook. */}
            Figma is my go-to design tool. Over the years, I have gotten used to
            its flexibility and robustness.
          </Tool>
        </ToolsSection>
        {/* <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Reflect">
            Using a daily notes system instead of trying to keep things
            organized by topics has been super powerful for me. And with
            Reflect, it’s still easy for me to keep all of that stuff
            discoverable by topic even though all of my writing happens in the
            daily note.
          </Tool>
          <Tool title="SavvyCal">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection> */}
      </div>
    </SimpleLayout>
  )
}
