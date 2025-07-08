def get_primes(limit):
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False

    for i in range(2, int(limit ** 0.5) + 1):
        if sieve[i]:
            for j in range(i*i, limit + 1, i):
                sieve[j] = False

    primes = [i for i, is_prime in enumerate(sieve) if is_prime]
    return primes

primes = get_primes(50)
print("50 이하의 소수:")
print(primes)