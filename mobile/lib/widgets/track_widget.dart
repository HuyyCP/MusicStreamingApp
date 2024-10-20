import 'package:flutter/material.dart';
import 'package:mobile/models/track_model.dart';
import 'package:mobile/theme/color_scheme.dart';
import 'package:mobile/widgets/dynamic_image.dart';

class TrackWidget extends StatelessWidget {
  final TrackModel track;
  const TrackWidget({required this.track, super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: GRAY_BCK_1,
      ),
      child: Row(
        children: [
          DynamicImage(
            track.imageLink,
            width: 76,
            height: 76,
            borderRadius: BorderRadius.circular(20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              track.name,
              style: Theme.of(context).textTheme.titleMedium,
            ),
          )
        ],
      ),
    );
  }
}