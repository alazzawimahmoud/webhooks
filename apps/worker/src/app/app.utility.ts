import { retry as _retry, AttemptFunction, PartialAttemptOptions } from '@lifeomic/attempt';

// Try the given operation up to 5 times. The initial delay will be 0
// and subsequent delays will be 200, 400, 800, 1600.
//
// If an attempt fails to complete after 1 second then the retries
// are aborted and error with `code` `ATTEMPT_TIMEOUT` is thrown.
const defaultAttemptOptions: PartialAttemptOptions<any> = {
    delay: 200,
    factor: 2,
    maxAttempts: 5,
    timeout: 1000
};

export function retry<T>(
    cb: AttemptFunction<T>,
    attemptOptions: PartialAttemptOptions<T> = defaultAttemptOptions
) {
    return _retry(cb, attemptOptions);
}