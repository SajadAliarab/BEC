<template>
    <div class="space-y-8">
        <!-- Section 1: How this works -->
        <UCard :ui="{

            body: {
                background: 'bg-teal-700/30',
            },
            header: {
                background: 'bg-teal-900',
            }
        }">
            <template #header>
                <h1 class=" font-bold text-amber-400 text-xl">How this works for you</h1>
            </template>

            <p class="mb-4  font-semibold">
                BEC Programme measures 90 separate aspects (Verbal and Visual) of your intellect to identify your unique
                talent and
                strengths.
            </p>
            <img src="/public/rubix.gif" alt="Capabilities cube" class="  w-full" />

        </UCard>

        <!-- Section 2: Coaching -->
        <UCard :ui="{

            body: {
                background: 'bg-teal-700/30',
            },
            header: {
                background: 'bg-teal-900',
            }
        }">
            <template #header>
                <h1 class=" font-bold text-amber-400 text-xl">One to one coaching with trained mentors</h1>
            </template>

            <div class="flex justify-center mb-4">
            </div>

            <p class="mb-4  font-semibold">
                Up to 10 hours with certified psychologists. The suggested pathway is monitored weekly to ensure it is
                the best
                one for you.
            </p>
            <img src="/public/one to one.jpg" alt="Capabilities cube" class="w-full" />
        </UCard>

        <!-- Section 3: Career Path -->
        <UCard :ui="{

            body: {
                background: 'bg-teal-700/30',
            },
            header: {
                background: 'bg-teal-900',
            }
        }">
            <template #header>

                <h1 class=" font-bold text-amber-400 text-xl">Career path matching</h1>

            </template>

            <p class="mb-4  font-semibold">
                We compare your assessment to over 120 career paths to find the best one for you. We can support you
                into
                self-employment to optimize your unique talents.
            </p>
            <img src="/public/future.jpg" alt="Capabilities cube" class="w-full" />

        </UCard>

        <!-- Section 4: Support System -->
        <UCard :ui="{

            body: {
                background: 'bg-teal-700/30',
            },
            header: {
                background: 'bg-teal-900',
            }
        }">
            <template #header>

                <h1 class="font-bold text-amber-400 text-xl">Support System & Panel</h1>

            </template>
            <p class="mb-4 font-semibold">
                We collaborate with like-minded organization to achieve the best result tailored to your unique
                potential. In
                addition you access to your unique dashboard to consider your progress.
            </p>
            <img src="/public/panel.png" alt="Capabilities cube" class="w-full" />

        </UCard>

        <div class="text-center">
            <h1 class="text-2xl font-bold">
                Unlock your <span class="text-amber-400">potential</span>, Achieve your <span
                    class="text-green-400">dreams</span>
            </h1>
        </div>
    </div>
</template>

<script>



</script>