import { Button } from "@/components/ui/button"

export function CustomizationSection() {
    return (
        <section className="relative z-10 flex flex-col gap-2 w-full mt-16 lg:mt-44">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="flex-col gap-2 items-start justify-center w-full inline md:block">
                        <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">Replication made</h1>
                        <div>
                            <h1 className="tracking-tight inline font-semibold bg-gradient-to-b from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent">
                                easy.
                            </h1>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-medium lg:text-large font-normal text-default-500 block max-w-full">
                        HeroUI is based on{" "}
                        <a
                            href="https://tailwind-variants.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:opacity-70"
                        >
                            Tailwind Variants
                        </a>
                        , it simplifies component slots customization while avoiding Tailwind class conflicts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="relative">
                        <pre className="bg-zinc-900 text-white p-4 rounded-xl text-sm overflow-auto min-h-[320px]">
                            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-zinc-400 text-xs">custom-button.tsx</span>
                            </div>
                            <code>{`import React from 'react';
import {Button} from '@heroui/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({...});
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-sm bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:duration-500! hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};

export default CustomButton;`}</code>
                        </pre>
                    </div>

                    <div className="flex flex-col justify-center gap-6">
                        <div className="flex relative w-full bg-gradient-to-tr from-[#FF72E1] to-[#F54C7A] rounded-2xl items-center justify-center h-full min-h-[320px] py-12 px-8">
                            <Button
                                className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:duration-500 hover:after:scale-150 hover:after:opacity-0"
                                size="lg"
                            >
                                Press me
                            </Button>
                        </div>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    className="max-w-fit bg-pink-100 text-pink-500 dark:bg-pink-900 dark:text-pink-300"
                >
                    Learn more
                </Button>
            </div>
        </section>
    )
}
