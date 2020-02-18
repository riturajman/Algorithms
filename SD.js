SD = args => {
  let sumN = 0,
    sumSQ = 0;
  for (i = 0; i < args.length; i++) {
    sumN = sumN + args[i];
    sumSQ = sumSQ + args[i] * args[i];
  }
  console.log(
    Math.sqrt(sumSQ / args.length - ((sumN / args.length) * sumN) / args.length)
  );
};

SD([3, 9, 15, 24, 29]);
