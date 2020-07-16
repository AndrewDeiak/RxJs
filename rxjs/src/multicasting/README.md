## Multicasting

share = publish().refCount()

shareReplay = publishReplay().refCount()

publish = multicast + Subject

publishReplay = multicast + ReplaySubject

publishBehaviour = multicast + BehaviourSubject

publishLast = multicast + AsyncSubject
