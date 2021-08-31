import { of, interval, forkJoin, combineLatest, timer } from "rxjs";

/*
 * In this example, only combineLatest works as there's no end for the forkJoin example (bc of `interval`)
 */
const buttonFJNS = document.getElementById("fork-join-not-show");
buttonFJNS.onclick = () => {
  const stream1 = interval(1000);
  const stream2 = of(1, 2, 3, 4);
  const stream3 = timer(2000);

  forkJoin(stream1, stream2, stream3).subscribe(x =>
    console.log("forkJoin", x)
  );
  // expect to console.log nothing
};

const buttonCL = document.getElementById("combine-latest");
buttonCL.onclick = () => {
  const stream1 = interval(1000);
  const stream2 = of(1, 2, 3, 4);
  const stream3 = timer(2000);
  combineLatest(stream1, stream2, stream3).subscribe(x =>
    console.log("combine-latest", x)
  );

  // expect to console.log indefinitely after 2 seconds
  // [1, 4, 0]
  // [2, 4, 0]
  // [3, 4, 0]
  // [4, 4, 0]
  // ...
};

const buttonFJ = document.getElementById("fork-join");
buttonFJ.onclick = () => {
  const stream1 = of(1, 2, 3, 4);
  const stream2 = timer(2000);

  forkJoin(stream1, stream2).subscribe(x => console.log("forkJoin", x));
  // expect to console.log [4, 0] after 2 seconds
};
